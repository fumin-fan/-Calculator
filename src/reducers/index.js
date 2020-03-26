import {combineReducers} from 'redux';
import deletes from './deletes';
import save from './save';

let reducers = combineReducers({
    deletes,
    save
})

export default reducers;