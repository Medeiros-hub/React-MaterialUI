import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from "./contexts/ThemeContext";
import { AppRoutes } from './Routes';
import { DarkTheme } from './shared/themes';


export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  )
}


