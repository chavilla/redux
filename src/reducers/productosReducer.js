
import { AGREGRAR_PRODUCTO, AGREGRAR_PRODUCTO_EXITO, AGREGRAR_PRODUCTO_ERROR} from '../types';

//cada reducers tiene su propio state
const initialState={
    productos:[],
    error:null,
    loading:false
}

//el reducer será una función que recibira un state y un action
export default function(state=initialState,action){
    switch(action.type){
        default:
            return state
    }
}