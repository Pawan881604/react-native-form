import {combineReducers} from 'redux';
import { userReducer } from './reducer/UserReducer';

const rootReducer = combineReducers({
userLogin:userReducer
})

export default rootReducer;