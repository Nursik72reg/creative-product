import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_CONTEXT, Theme, ThemeContext } from './ThemeContext';

export interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(currentTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_CONTEXT, currentTheme);
    };

    return {
        theme, toggleTheme,
    };
};
