import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./Components/Redux/redux-store";
import {Provider} from "react-redux";


const RenderEntireTree = () => {
    return (
        ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                <App/>
                </Provider>
            </BrowserRouter>, document.getElementById('root')
        )
    );
};

RenderEntireTree()


