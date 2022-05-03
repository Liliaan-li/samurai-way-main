export type UsersType = {
    id: number
    photo: string
    fullName: string
    status: string
    followed: boolean
    location: LocationType
}
export type LocationType = {
    city: string
    country: string
}
let initialState = {
    users: [
       ] as Array<UsersType>
}
export type InitialStateType = typeof initialState
const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
            case 'SET-USER':
            return {
                ...state,
                users: [...state.users,...action.payload.users]
            }
        default:
            return state
    }
}
export type ActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUserAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}
export const setUserAC = (users: Array<UsersType>) => {
    return {
        type: 'SET-USER',
        payload: {
            users
        }
    } as const
}
export default usersReducer