import React from 'react';
import './App.css';
import Head from './Components/Header/Head';
import Profile from "./Components/Profile/Profile";
import {Navbar} from "./Components/Navbar/Navbar";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import {Route, Switch} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";

function App() {
    return (

            <div className  ='app-wrapper'>
                <Head/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path={'/'} render={() => <Profile />}/>
                        <Route path='/Messages' render={() => <MessagesContainer />}/>
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                        <Route path='/Users' render={() => <UsersContainer/>}/>
                    </Switch>
                </div>
            </div>

    );
}

export default App;
