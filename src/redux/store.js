import ProfileReducer from "./ProfileReducer";
import DialogReducer from "./DialogReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Vodka pravit mirom!!!!!", likesCount: 10},
                {id: 1, message: "Medoff spaset mir!!!!!", likesCount: 15}
            ],
            newPostText: 'vodka.ru'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Yo!"},
                {id: 2, name: "Ne Yo!"},
                {id: 3, name: "Nerealno Yo!"},
                {id: 4, name: "Slishkom Yo!"},
                {id: 5, name: "Bezumno Yo!"}
            ],
            messages: [
                {id: 1, message: "Yooooooo!!!!"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Shuyali???"}
            ],
            newMessageBody: ""
        }

    },
    _callSubscriber() {
        console.log("State was changed!");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.messagesPage = DialogReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}




window.store = store;

export default store;