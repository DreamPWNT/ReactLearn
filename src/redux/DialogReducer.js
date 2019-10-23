const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:

            state.newMessageBody = action.body;

            return state;

        case SEND_MESSAGE:

            let body = state.newMessageBody;
            let newMessage = {
                id: 4,
                message: body
            };

            state['messages'].push(newMessage);
            state.newMessageBody = '';

            return state;

        default:

            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default DialogReducer;
