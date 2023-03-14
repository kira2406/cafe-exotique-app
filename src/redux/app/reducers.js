import * as constants from "./constants"

const initialState = {
    loader: false,
    appMessages: []
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_APP_MESSAGE:
            return {
                ...state,
                appMessages: [...state.appMessages, action.payload]
            }
        case constants.CLEAR_APP_MESSAGE:
            const messages = state.appMessages.filter(notification => notification.id !== action.payload.index)
            return {
                ...state,
                appMessages: messages
            }
        case constants.REMOVEALL_APP_MESSAGE:
            return {
                ...state,
                appMessages: []
            }
        default:
            return state
    }

}