export declare const createStackNavigator: {
    <ParamList extends import("@react-navigation/core").ParamListBase>(): import("@react-navigation/core").TypedNavigator<ParamList, Readonly<{
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
    }>, {}, import("@react-navigation/core").EventMapBase, (props: any) => JSX.Element>;
    <ParamList_1 extends import("@react-navigation/core").ParamListBase, Config extends import("packages/core/lib/typescript/src/StaticNavigation").StaticConfig<ParamList_1, Readonly<{
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
    }>, {}, import("@react-navigation/core").EventMapBase, (props: any) => JSX.Element>>(config: Config): import("@react-navigation/core").TypedNavigator<ParamList_1, Readonly<{
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
    }>, {}, import("@react-navigation/core").EventMapBase, (props: any) => JSX.Element> & {
        config: Config;
    };
};
//# sourceMappingURL=createStackNavigator.d.ts.map