export type namesDataType = {
    id: number
    name: string
}
export type messagesType = {
    id: number
    message: string
}

let initialState = {
    namesData: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Marta"},
        {id: 3, name: "Sonhwa"},
        {id: 4, name: "Lola"},
        {id: 5, name: "Kirill"},
        {id: 6, name: "Miga"},
    ] as Array<namesDataType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "What's going on"},
    ] as Array<messagesType>,
    newMessageBody: '',
}
export type InitialStateType = typeof initialState
export const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const messageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body};

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        default:
            return state;
    }
}
export type ActionsType =
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => ({type: SEND_MESSAGE}) as const
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}) as const
export default messageReducer;
