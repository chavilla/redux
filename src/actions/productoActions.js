import { AGREGAR_PRODUCTO, 
    AGREGAR_PRODUCTO_EXITO, 
    AGREGAR_PRODUCTO_ERROR,
    INICIAR_CONSULTAR_PRODUCTOS,
    CONSULTAR_PRODUCTOS_EXITO,
    CONSULTAR_PRODUCTOS_ERROR,
    PRODUCTO_ELIMINADO,
    PRODUCTO_NOELIMINADO,
    OBTENER_PRODUCTO_ELIMINAR
} from '../types';

import clienteAxios from '../config/axios';

//Crear nuevos productos
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


//Consultar productos
export function consultarProductosAction(){
    return async (dispatch)=>{
        dispatch(iniciarConsultarProductos());
        try {
            const respuesta= await clienteAxios('/productos');
            dispatch(consultarProductosExito(respuesta.data))
        } catch (error) {
            dispatch(consultarProductosError(true))
        }
    }
}

const iniciarConsultarProductos=()=>({
    type: INICIAR_CONSULTAR_PRODUCTOS,
    payload:true
})

const consultarProductosExito=productos=>({
    type:CONSULTAR_PRODUCTOS_EXITO,
    payload: productos
})

const consultarProductosError=error=>({
    type:CONSULTAR_PRODUCTOS_ERROR,
    payload: error
})

//Selecciona y elimina el producto
export function eliminarProductoAction(id){
    return async (dispatch)=>{
        dispatch(obtenerProductoEliminar(id));
        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(productoEliminado());
            
        } catch (error) { 
            dispatch(productoNoEliminado(true))  
        }
    }
}

const obtenerProductoEliminar=id=>({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload:id
})

const productoEliminado=()=>({
    type: PRODUCTO_ELIMINADO
})

const productoNoEliminado=error=>({
    type: PRODUCTO_NOELIMINADO,
    payload:error
})