export const MODE_DARK = 'dark';
export const MODE_LIGHT = 'light';

export const userPreferredMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? MODE_DARK : MODE_LIGHT;
 
export const isDarkMode = (mode: string) => mode === MODE_DARK;