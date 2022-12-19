import { Button } from '@mui/material';
import { Routes, Route, Navigate} from 'react-router-dom'
import { useAppThemeContext } from '../contexts';


export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();


    return (
        <Routes>
            <Route path='/home' element={
                <Button onClick={toggleTheme} variant='contained' color='primary'>Teste</Button>}
            ></Route>

            <Route path='*' element={
                <Navigate to="/home"/>
            }></Route>
        </Routes>
    );
}