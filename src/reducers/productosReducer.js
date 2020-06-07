import { AGREGAR_PRODUCTO, 
    AGREGAR_PRODUCTO_EXITO, 
    AGREGAR_PRODUCTO_ERROR,
    INICIAR_CONSULTAR_PRODUCTOS,
    CONSULTAR_PRODUCTOS_EXITO,
    CONSULTAR_PRODUCTOS_ERROR,
    PRODUCTO_ELIMINADO,
    PRODUCTO_NOELIMINADO,
    OBTENER_PRODUCTO_ELIMINAR,
    OBTENER_PRODUCTO_EDITAR,
    INICIAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO,
    PRODUCTO_NOEDITADO
} from '../types';

//cada reducers tiene su propio state
const initialState={
    productos:[],
    error:null,
    loading:false,
    insertado:false,
    eliminar:null,
    productoEditar:null
}

//el reducer será una función que recibira un state y un action
export default function(state=initialState,action){
    switch(action.type){
        case INICIAR_CONSULTAR_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading:action.payload,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                productos:[...state.productos, action.payload]
            }
        case CONSULTAR_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case CONSULTAR_PRODUCTOS_EXITO:
            return{
                ...state,
                loading:false,
                error:null,
                productos:action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                eliminar:action.payload
            }
        case PRODUCTO_ELIMINADO:
            return{
                ...state,
                productos: state.productos.filter(producto=> producto.id !== state.eliminar),
                eliminar:null
            }
        case PRODUCTO_NOELIMINADO:
            return{
                ...state,
                error:true
            }
        case OBTENER_PRODUCTO_EDITAR:
            return{
                ...state,
                productos:state.productos,
                productoEditar:action.payload
            }
        case INICIAR_EDICION_PRODUCTO:
            return{
                ...state,
            }
        case PRODUCTO_NOEDITADO:
            return{
                ...state,
                error:action.payload
            }
        case PRODUCTO_EDITADO:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}