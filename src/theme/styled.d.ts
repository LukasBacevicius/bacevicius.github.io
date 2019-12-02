import 'styled-components';

/* TODO: missing types */
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {},
        color: (name: string, tint?: string) => string | undefined;
        setDimensions: (width: string, height?: string) => string;
    }
}
