export type friendNameType = {
    friendName: string
}
let initialState={
    friendsNames: [
    {friendName: "Andrew"},
    {friendName: "Marta"},
    {friendName: "Sonhwa"},
] as Array<friendNameType>
}
export type InitialStateType = typeof initialState
const sideBarReducer=(state: InitialStateType=initialState, action:any): InitialStateType=>{
    switch (action.type) {
        default:
            return state;
    }
}
export default sideBarReducer;