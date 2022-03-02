import React from 'react';
import './App.css';
import Head from './Components/Head';
import Navigation from "./Components/Navbar";
import Profile from "./Components/Profile";
import s from './Components//Navbar.module.css'
function App() {
    return (
        <div className='app-wrapper'>
            <Head />
            <nav className={s.nav}>
                <Navigation nav={"Profile"}/>
                <Navigation nav={"Messages"}/>
                <Navigation nav={"News"}/>
                <Navigation nav={"Music"}/>
                <Navigation nav={"Settings"}/>
            </nav>
            <Profile />
        </div>
    );
}
export default App;
