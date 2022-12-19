import { ThemeProvider } from "@mui/material";
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from "../shared/themes";
import React, { createContext, useCallback, useState, useMemo, useContext } from "react";

interface IThemeContextData {
    // Themename só aceita uma string contendo 'light' ou 'dark'
    themeName: 'Light' | 'Dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}


interface IAppThemeProviderProps {
    children: React.ReactNode
}
export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<'Light' | 'Dark'>('Light');

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'Light' ? 'Dark' : 'Light');
    }, [])

    const theme = useMemo(() => {
        if (themeName == 'Light') return LightTheme; 

        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box 
                    width="100vw" 
                    height="100vh" 
                    bgcolor={theme.palette.background.default}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}