"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLinkTools = useLinkTools;
var _core = require("@react-navigation/core");
var React = _interopRequireWildcard(require("react"));
var _LinkingContext = require("./LinkingContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const getRootStateForNavigate = (navigation, state) => {
  const parent = navigation.getParent();
  if (parent) {
    const parentState = parent.getState();
    return getRootStateForNavigate(parent, {
      index: 0,
      routes: [{
        ...parentState.routes[parentState.index],
        state: state
      }]
    });
  }
  return state;
};

/**
 * Build destination link for a navigate action.
 * Useful for showing anchor tags on the web for buttons that perform navigation.
 */
function useLinkTools() {
  const navigation = React.useContext(_core.NavigationHelpersContext);
  const linking = React.useContext(_LinkingContext.LinkingContext);
  const buildHref = React.useCallback((name, params) => {
    const {
      options
    } = linking;
    if ((options === null || options === void 0 ? void 0 : options.enabled) === false) {
      return undefined;
    }
    const state = navigation ? getRootStateForNavigate(navigation, {
      index: 0,
      routes: [{
        name,
        params
      }]
    }) :
    // If we couldn't find a navigation object in context, we're at root
    // So we'll construct a basic state object to use
    {
      index: 0,
      routes: [{
        name,
        params
      }]
    };
    const path = options !== null && options !== void 0 && options.getPathFromState ? options.getPathFromState(state, options === null || options === void 0 ? void 0 : options.config) : (0, _core.getPathFromState)(state, options === null || options === void 0 ? void 0 : options.config);
    return path;
  }, [linking, navigation]);
  const buildAction = React.useCallback(href => {
    if (!href.startsWith('/')) {
      throw new Error(`The path must start with '/' (${href}).`);
    }
    const {
      options
    } = linking;
    const state = options !== null && options !== void 0 && options.getStateFromPath ? options.getStateFromPath(href, options.config) : (0, _core.getStateFromPath)(href, options === null || options === void 0 ? void 0 : options.config);
    if (state) {
      const action = (0, _core.getActionFromState)(state, options === null || options === void 0 ? void 0 : options.config);
      return action ?? _core.CommonActions.reset(state);
    } else {
      throw new Error('Failed to parse the path to a navigation state.');
    }
  }, [linking]);
  return {
    buildHref,
    buildAction
  };
}
//# sourceMappingURL=useLinkTools.js.map