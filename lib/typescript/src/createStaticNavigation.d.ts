import { ParamListBase, StaticNavigation } from '@react-navigation/core';
import * as React from 'react';
import { NavigationContainer } from './NavigationContainer';
import type { LinkingOptions } from './types';
type Props = Omit<React.ComponentProps<typeof NavigationContainer>, 'linking' | 'children'> & {
    /**
     * Options for deep linking.
     */
    linking?: Omit<LinkingOptions<ParamListBase>, 'config'>;
};
/**
 * Create a navigation component from a static navigation config.
 * The returned component is a wrapper around `NavigationContainer`.
 *
 * @param tree Static navigation config.
 * @returns Navigation component to use in your app.
 */
export declare function createStaticNavigation(tree: StaticNavigation<any, any, any>): ({ linking, ...rest }: Props) => JSX.Element;
export {};
//# sourceMappingURL=createStaticNavigation.d.ts.map