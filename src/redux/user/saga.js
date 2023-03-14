import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CAFE_EXOTIQUE_API_URL } from '../../components/constants';
import { userLoginFailure, userLoginSuccess } from './actions';
import * as constants from './constants';

const userLoginCall = async (request) => {
    try {
        const response = await axios.post(`${CAFE_EXOTIQUE_API_URL}/staff/login`, request);
        return ({ response });
    } catch (error) {
        return ({ error });
    }
}

function* userLoginRequest({ payload }) {

    const { response, error } = yield call(userLoginCall, payload)

    console.log("This is triggered", payload)
    if (response) {
        console.log("KP Oh here")
        yield put(userLoginSuccess(response.data))
        setTimeout(() => {
            console.log("Redirect now")
        }, 2000);
    } else {
        console.log("KP Oh shit")
        yield put(userLoginFailure({ statusCode: error.response.status }))
    }
}

function* userLoginFailed({ payload }) {
    const statusCode = payload.statusCode
    console.log(statusCode)
    if (statusCode === 401) {
        console.log("Incorrect Username or password")
    } else {
        console.log("System error")
    }
}

function* userDetailsRequest() {
    console.log("This is triggered")
}


const watcher = [
    takeLatest(constants.USER_LOGIN_REQUEST, userLoginRequest),
    takeLatest(constants.USER_LOGIN_FAILURE, userLoginFailed),
    takeLatest(constants.USER_DETAILS_REQUEST, userDetailsRequest),
    takeLatest(constants.USER_DETAILS_FAILURE, userLoginFailed)
];

export default watcher;