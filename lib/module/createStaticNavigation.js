function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { createComponentForStaticNavigation, createPathConfigForStaticNavigation } from '@react-navigation/core';
import * as React from 'react';
import { NavigationContainer } from './NavigationContainer';
/**
 * Create a navigation component from a static navigation config.
 * The returned component is a wrapper around `NavigationContainer`.
 *
 * @param tree Static navigation config.
 * @returns Navigation component to use in your app.
 */
export function createStaticNavigation(tree) {
  const Component = createComponentForStaticNavigation(tree, 'RootNavigator');
  const linkingConfig = {
    screens: tree.config.screens ? createPathConfigForStaticNavigation(tree) : {}
  };
  return function Navigation(_ref) {
    let {
      linking,
      ...rest
    } = _ref;
    return /*#__PURE__*/React.createElement(NavigationContainer, _extends({}, rest, {
      linking: linking ? {
        ...linking,
        config: linkingConfig
      } : undefined
    }), /*#__PURE__*/React.createElement(Component, null));
  };
}
//# sourceMappingURL=createStaticNavigation.js.map