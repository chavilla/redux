import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import clientesReducer from './clientesReducer';

export default combineReducers({
    productos: productosReducer
})