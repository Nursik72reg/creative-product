import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.scss'
import {useTheme} from "@/app/providers/ThemeProvider";
import {classNames} from "@/shared/lib/classNames";
import {AboutPage} from "@/pages/AboutPage";
import {MainPage} from "@/pages/MainPage";

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