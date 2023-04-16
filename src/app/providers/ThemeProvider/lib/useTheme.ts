import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_CONTEXT, Theme, ThemeContext } from './ThemeContext';

export interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let currentTheme: Theme;
        console.log('theme', theme);
        switch (theme) {
        case Theme.DARK:
            currentTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            currentTheme = Theme.ORANGE;
            break;
        case Theme.ORANGE:
            currentTheme = Theme.DARK;
            break;
        default:
            currentTheme = Theme.LIGHT;
        }
        setTheme?.(currentTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_CONTEXT, currentTheme);
    };

    return {
        theme: theme || Theme.LIGHT, toggleTheme,
    };
};
