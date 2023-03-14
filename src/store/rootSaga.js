import { all } from 'redux-saga/effects';
import usersWatcher from "../redux/user/saga"

export default function* rootSaga() {
    yield all([
        ...usersWatcher
    ]);
}