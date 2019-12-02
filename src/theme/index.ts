import colors from './colors';

export default (mode: string = 'dark') => {
    return {
        colors,
        //@ts-ignore
        color: (name: string, tint: string = '100'): string | undefined => colors[name][mode][tint],
        setDimensions: (width: string, height: string = width) => `
            width: ${width};
            height: ${height};
        `
    }
};