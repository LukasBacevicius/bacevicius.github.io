import colors from './colors';

export default (mode: string = 'dark') => {
    return {
        colors,
        //@ts-ignore
        color: (name: string, tint: string = '100'): string | undefined => colors[name][mode][tint],
        setDimensions: (width: string, height: string = width) => `
            width: ${width};
            height: ${height};
        `,
        typography: {
            font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'",
            sizes: [
                '2.5rem',
                '2rem',
                '1.5rem',
                '1.25rem',
                '1.125rem',
                '0.875rem'
            ],
            bodySize: '1rem',
            headingLineHeight: 1,
            bodyLineHeight: 1.2
        }
    }
};