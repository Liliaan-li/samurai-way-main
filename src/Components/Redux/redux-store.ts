import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messagesReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer);

export type ReduxStoreType= typeof store
export type AppRootStateType = ReturnType<typeof rootReducer>