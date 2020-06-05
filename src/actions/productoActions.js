import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR} from '../types';

import clienteAxios from '../config/axios';

//Crearnuevos productos
export function crearProductoAction(producto){
    return async (dispatch)=>{
        //Llamar a addproducto
        dispatch(agregarProducto());

        try {
             //Insertar en la api
             await clienteAxios.post('/productos', producto);
             //si sale bien actualizar el state
            setTimeout(()=>{
                dispatch(agregarProductoExito(producto));
                alert('Producto insertado satisfactoriamente.');
            },3000)
        } catch (error) {
            setTimeout(()=>{
                //Si hay un error
                dispatch(agregarProductoError(true))
            },3000)
        }
    }
}

//Crear función addProducto
const agregarProducto=()=>({
    type: AGREGAR_PRODUCTO,
    payload:true
})

//Si se guarda en la base de datos
const agregarProductoExito=producto=>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError=error=>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
})