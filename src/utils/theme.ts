export const MODE_DARK = 'dark';
export const MODE_LIGHT = 'light';

export const MODE_CHANGE_CLASS = '--theme-change';
export const MODE_ANIMATE_CLASS = '--animate-theme-change';

export const userPreferredMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? MODE_DARK : MODE_LIGHT;

export const isDarkMode = (mode: string) => mode === MODE_DARK;

export const changeMode = (action: () => any) => {
    document.body.classList.add(MODE_CHANGE_CLASS);

    action();

    setTimeout(() => document.body.classList.remove(MODE_CHANGE_CLASS), 500);
}