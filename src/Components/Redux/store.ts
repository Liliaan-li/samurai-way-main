import  {addPostActionCreator, postsType, updateNewPostActionCreator} from "./profileReducer";
import  {
    messagesType,
    namesDataType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "./messagesReducer";

export type StoreType = {
    _state: StateType
    // dispatch: (action: ActionsType) => void
    subscribe: (observer: () => void) => void
    _CallSubscriber: () => void
    getState: () => StateType
}
export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>


let store: StoreType = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likes: 20},
                {id: 2, message: "It's my first post", likes: 10},
            ],
            newPostText: ""
        },
        MessagesPage: {
            namesData: [
                {id: 1, name: "Andrew"},
                {id: 2, name: "Marta"},
                {id: 3, name: "Sonhwa"},
                {id: 4, name: "Lola"},
                {id: 5, name: "Kirill"},
                {id: 6, name: "Miga"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "What's going on"},
            ],
            newMessageBody: "",
        },

        SideBar: {
            friendsNames: [
                {friendName: "Andrew"},
                {friendName: "Marta"},
                {friendName: "Sonhwa"},
            ]
        }
    },
    _CallSubscriber() {

    },
    subscribe(observer) {
        this._CallSubscriber = observer
    },
    getState() {
        return this._state
    },
    // dispatch(action) {
    //     this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
    //     this._state.MessagesPage = messageReducer(this._state.MessagesPage, action)
    //     this._state.SideBar = sideBarReducer(this._state.SideBar, action)
    //     this._CallSubscriber()
    // }
}
export type StateType = {
    ProfilePage: ProfilePageType
    MessagesPage: MessagePageType
    SideBar: SideBarType
}
export type ProfilePageType = {
    posts: Array<postsType>
    newPostText: string
}

export type MessagePageType = {
    namesData: Array<namesDataType>
    messages: Array<messagesType>
    newMessageBody: string
}

export type SideBarType = {
    friendsNames: Array<friendNameType>
}
export type friendNameType = {
    friendName: string
}
export default store;