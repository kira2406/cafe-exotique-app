import { combineReducers } from 'redux';
import appReducer from './app/reducers';
import userReducer from './user/reducers';

const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer
});

export default rootReducer;