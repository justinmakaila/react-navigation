import { CommonActions, getActionFromState, getPathFromState, getStateFromPath, NavigationHelpersContext } from '@react-navigation/core';
import * as React from 'react';
import { LinkingContext } from './LinkingContext';
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
export function useLinkTools() {
  const navigation = React.useContext(NavigationHelpersContext);
  const linking = React.useContext(LinkingContext);
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
    const path = options !== null && options !== void 0 && options.getPathFromState ? options.getPathFromState(state, options === null || options === void 0 ? void 0 : options.config) : getPathFromState(state, options === null || options === void 0 ? void 0 : options.config);
    return path;
  }, [linking, navigation]);
  const buildAction = React.useCallback(href => {
    if (!href.startsWith('/')) {
      throw new Error(`The path must start with '/' (${href}).`);
    }
    const {
      options
    } = linking;
    const state = options !== null && options !== void 0 && options.getStateFromPath ? options.getStateFromPath(href, options.config) : getStateFromPath(href, options === null || options === void 0 ? void 0 : options.config);
    if (state) {
      const action = getActionFromState(state, options === null || options === void 0 ? void 0 : options.config);
      return action ?? CommonActions.reset(state);
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