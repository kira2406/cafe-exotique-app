import * as constants from "./constants"

export const userLoginRequest = (payload) => {
    return {
        type: constants.USER_LOGIN_REQUEST,
        payload: payload
    }
}

export const userLoginSuccess = (payload) => {
    return {
        type: constants.USER_LOGIN_SUCCESS,
        payload: payload
    }
}

export const userLoginFailure = (payload) => {
    return {
        type: constants.USER_LOGIN_FAILURE,
        payload: payload
    }
}


export const setUserDetails = (payload) => {
    return {
        type: constants.SET_USER_DETAILS,
        payload: payload
    }
}

export const userLogout = () => {
    return {
        type: constants.USER_LOGOUT
    }
}