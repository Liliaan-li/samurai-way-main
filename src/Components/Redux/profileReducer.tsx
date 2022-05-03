export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type postsType = {
    id: number
    message: string
    likes: number
}

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likes: 20},
        {id: 2, message: "It's my first post", likes: 10},
    ] as Array<postsType>,
    newPostText: ''
}
export type InitialStateType = typeof initialState
const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const postText = state.newPostText;
            return {...state,
                newPostText: '',
                posts: [...state.posts, {id: 3, message: postText, likes: 100}]
            };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        default :
            return state;
    }

}
export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const
export default profileReducer;