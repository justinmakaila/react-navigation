import * as React from 'react';
import { Platform, Text } from 'react-native';
import { useLinkProps } from './useLinkProps';
/**
 * Component to render link to another screen using a path.
 * Uses an anchor tag on the web.
 *
 * @param props.screen Name of the screen to navigate to (e.g. `'Feeds'`).
 * @param props.params Params to pass to the screen to navigate to (e.g. `{ sort: 'hot' }`).
 * @param props.href Optional absolute path to use for the href (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 * @param props.children Child elements to render the content.
 */
export function Link(_ref) {
  let {
    screen,
    params,
    action,
    href,
    ...rest
  } = _ref;
  // @ts-expect-error: This is already type-checked by the prop types
  const props = useLinkProps({
    screen,
    params,
    action,
    href
  });
  const onPress = e => {
    if ('onPress' in rest) {
      var _rest$onPress;
      (_rest$onPress = rest.onPress) === null || _rest$onPress === void 0 ? void 0 : _rest$onPress.call(rest, e);
    }

    // Let user prevent default behavior
    if (!e.defaultPrevented) {
      props.onPress(e);
    }
  };
  return /*#__PURE__*/React.createElement(Text, {
    ...props,
    ...rest,
    ...Platform.select({
      web: {
        onClick: onPress
      },
      default: {
        onPress
      }
    })
  });
}
//# sourceMappingURL=Link.js.map