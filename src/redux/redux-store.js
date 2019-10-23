import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogReducer from "./DialogReducer";
import SidebarReducer from "./SidebarReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: DialogReducer,
    sidebar: SidebarReducer
})

let store = createStore(reducers);

export default store;