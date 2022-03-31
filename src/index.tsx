import state, {subscribe} from "./Components/Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updatePostText} from "./Components/Redux/State";
import {BrowserRouter} from "react-router-dom";

const RenderEntireTree = (state: StateType) => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <App state={state} addPost={addPost} updatePostText={updatePostText}/>
            </BrowserRouter>, document.getElementById('root')
        )
    );
};

RenderEntireTree(state)
subscribe(RenderEntireTree)


