import 'styled-components';

/* TODO: missing types */
declare module 'styled-components' {
    export interface DefaultTheme {
        color: (name: string, tint?: number) => string | undefined;
        helpers: {
            setDimensions: (width: string, height?: string) => string;
            toRem: (pxValue: number) => string | undefined;
        };
        transitions: {
            default: (toAnimate?: Array<string>, duration?: string) => string;
        };
        decorations: {
            shadows: {
                default: string;
            }
        };
        typography: {
            styles: {}
            fontFamily: string;
        };
    }
}
