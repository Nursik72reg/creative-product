import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_CONTEXT, Theme, ThemeContext } from '../lib/ThemeContext';

export const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_CONTEXT) as Theme || Theme.NORMAL;

const ThemeProvider:FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
