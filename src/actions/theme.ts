export const theme = {
    setMode: 'THEME_SET_MODE'
}

export function setMode() {
    return {
        type: theme.setMode
    };
}