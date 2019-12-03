import 'styled-components';

/* TODO: missing types */
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {},
        color: (name: string, tint?: number) => string | undefined;
        setDimensions: (width: string, height?: string) => string;
    }
}
