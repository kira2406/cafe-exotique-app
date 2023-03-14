import * as constants from "./constants"

const initialState = {
    user: {},
    loginSuccess: false,
    loginFailed: false,
    loading: false
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case constants.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                loginSuccess: false,
                loginFailed: false
            }
        case constants.USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                loginSuccess: true,
                loginFailed: false
            }
        case constants.USER_LOGIN_FAILURE:
            return {
                ...state,
                user: action.payload,
                loading: false,
                loginFailed: true
            }
        case constants.USER_LOGOUT:
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}