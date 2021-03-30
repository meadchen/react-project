import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import {dialogsReducer} from "./messages-reducer";
import sidebarReducer from "./sidebar";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);
window.store = store;

export default store;