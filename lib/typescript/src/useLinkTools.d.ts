import { CommonActions } from '@react-navigation/core';
/**
 * Build destination link for a navigate action.
 * Useful for showing anchor tags on the web for buttons that perform navigation.
 */
export declare function useLinkTools(): {
    buildHref: (name: string, params?: object) => string | undefined;
    buildAction: (href: string) => {
        type: "NAVIGATE";
        payload: {
            name: string;
            params?: import("@react-navigation/core").NavigatorScreenParams<Readonly<{
                key: string;
                index: number;
                routeNames: string[];
                history?: unknown[] | undefined;
                routes: (Readonly<{
                    key: string;
                    name: string;
                    path?: string | undefined;
                }> & Readonly<{
                    params?: Readonly<object | undefined>;
                }> & {
                    state?: Readonly<any> | import("@react-navigation/core").PartialState<Readonly<any>> | undefined;
                })[];
                type: string;
                stale: false;
            }>>;
            path?: string | undefined;
        };
    } | CommonActions.Action;
};
//# sourceMappingURL=useLinkTools.d.ts.map