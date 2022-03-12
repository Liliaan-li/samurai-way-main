import React from 'react';
import './App.css';
import Head from './Components/Header/Head';
import Profile from "./Components/Profile/Profile";
import {Navbar} from "./Components/Navbar/Navbar";
import Messages from "./Components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

const items = [
    {item: "Profile"},
    {item: "Messages"},
    {item: "News"},
    {item: "Music"},
    {item: "Settings"}
]
export type itemsType = {
    item: string
}

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Head/>

                <Navbar items={items}/>

                <div className='app-wrapper-content'>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={'/messages'} component={Messages}/>
                        <Route path={'/news'} component={News}/>
                        <Route path={'/music'} component={Music}/>
                        <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
