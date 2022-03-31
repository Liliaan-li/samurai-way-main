export type StateType = {
    ProfilePage: ProfilePageType
    MessagesPage: MessagePageType
    SideBar: SideBarType
}
export type ProfilePageType = {
    posts: Array<postsType>
    newPostText: string
}
export type postsType = {
    id: number
    message: string
    likes: number
}
export type MessagePageType = {
    namesData: Array<namesDataType>
    messages: Array<messagesType>
}
export type namesDataType = {
    id: number
    name: string
}
export type messagesType = {
    message: string
}
export type SideBarType = {
    friendsNames: Array<friendNameType>
}
export type friendNameType = {
    friendName: string
}
let RenderEntireTree=(state:StateType)=>{

}
let state: StateType = {
    ProfilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likes: 20},
            {id: 2, message: "It's my first post", likes: 10},
        ],
        newPostText:""
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
            {message: "Hi"},
            {message: "How are you"},
            {message: "What's going on"},
        ]
    },

    SideBar: {
        friendsNames: [
            {friendName: "Andrew"},
            {friendName: "Marta"},
            {friendName: "Sonhwa"},
        ]
    }
}
export const addPost = () =>{
 const NewPost: postsType ={id:3, message:state.ProfilePage.newPostText, likes: 100}
    state.ProfilePage.posts.push(NewPost)
    state.ProfilePage.newPostText=""
    RenderEntireTree(state)
}
export const updatePostText = (newText: string) =>{
    state.ProfilePage.newPostText = newText;
    RenderEntireTree(state)
}
export const subscribe=(observer: (state:StateType)=>void)=>{
    RenderEntireTree=observer
}
export default state;