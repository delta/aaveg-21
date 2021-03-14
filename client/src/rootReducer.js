import { combineReducers } from 'redux';
import networkReducer from './redux/offline'

export default combineReducers({
    network: networkReducer,
});