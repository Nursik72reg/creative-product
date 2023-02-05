import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const MainPage = React.lazy(() => import('./pages/MainPage/MainPage'));


const App = () => {
    const {toggleTheme, theme} = useTheme()

    return (
        <div className={ classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О себе</Link>
            <Suspense fallback='Идет загрузка'>
                <Routes>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;