import React from 'react';
import './App.css';
import Head from './Components/Header/Head';
import Profile from "./Components/Profile/Profile";
import {Navbar} from "./Components/Navbar/Navbar";
import Messages from "./Components/Messages/Messages";
import {Route, Switch} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import state, {StateType} from "./Components/Redux/State";
import SideBar from "./Components/Navbar/SideBar";


type AppStateType = {
    state: StateType
    addPost:(message:string)=>void
    updatePostText:(newText:string)=> void
}

function App(props: AppStateType) {
    return (

            <div className  ='app-wrapper'>
                <Head/>
                <Navbar sideBar={state.SideBar}/>

                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path={'/'} render={() => <Profile profilePage={state.ProfilePage} addPost={props.addPost} updatePostText={props.updatePostText}/>}/>
                        <Route path='/Messages' render={() => <Messages messagesPage={state.MessagesPage}/>}/>
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                        {/*<Route path='/Friends' render={()=><SideBar/>}/>*/}
                    </Switch>
                </div>
            </div>

    );
}

export default App;
