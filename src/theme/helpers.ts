export const setDimensions = (width: string, height: string = width) => `
    width: ${width};
    height: ${height};
`;

export const toRem = (pxValue: number): string | undefined => `${pxValue / 16}rem`;
