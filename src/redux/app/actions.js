import * as constants from './constants'
import store from '../../store';


export const addAppMessage = (message, type, timeout) => {
    const appMessagesState = store.getState().app.appMessages
    const id = appMessagesState.length;
    if (timeout)
        setTimeout(function () { return store.dispatch(clearAppMessages(id)) }, 3000)
    return {
        type: constants.ADD_APP_MESSAGE,
        payload: { id, message, type, timeout }
    }

}

export const removeAllAppMessages = () => {
    return {
        type: constants.REMOVEALL_APP_MESSAGE
    }
}

export const clearAppMessages = (index) => {
    console.log("KP clear", index)
    return {
        type: constants.CLEAR_APP_MESSAGE,
        payload: { index }
    }
}