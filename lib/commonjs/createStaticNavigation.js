"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStaticNavigation = createStaticNavigation;
var _core = require("@react-navigation/core");
var React = _interopRequireWildcard(require("react"));
var _NavigationContainer = require("./NavigationContainer");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Create a navigation component from a static navigation config.
 * The returned component is a wrapper around `NavigationContainer`.
 *
 * @param tree Static navigation config.
 * @returns Navigation component to use in your app.
 */
function createStaticNavigation(tree) {
  const Component = (0, _core.createComponentForStaticNavigation)(tree, 'RootNavigator');
  const linkingConfig = {
    screens: tree.config.screens ? (0, _core.createPathConfigForStaticNavigation)(tree) : {}
  };
  return function Navigation(_ref) {
    let {
      linking,
      ...rest
    } = _ref;
    return /*#__PURE__*/React.createElement(_NavigationContainer.NavigationContainer, _extends({}, rest, {
      linking: linking ? {
        ...linking,
        config: linkingConfig
      } : undefined
    }), /*#__PURE__*/React.createElement(Component, null));
  };
}
//# sourceMappingURL=createStaticNavigation.js.map