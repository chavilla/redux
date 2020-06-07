import React from 'react';
import {useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eliminarProductoAction, obtenerProductoEditar } from '../actions/productoActions';


const Producto = ({producto}) => {

    const dispatch=useDispatch();
    //Habilitar history
    const history=useHistory();

    const onClick=id=>{
        dispatch(eliminarProductoAction(id))
    }
    //Funcion que redirige de forma programada
    const redireccionarEdicion=producto=>{
        //editarProducto(producto);
        dispatch(obtenerProductoEditar(producto))
        history.push(`productos/editar/${producto.id}`)
    }

    return ( 
        <tr>
            <td>{producto.nombre}</td>
            <td className="text-right font-weight-bold">$ {producto.precio}</td>
            <td className="text-center acciones">
                <button type="button" className="btn btn-primary mr-2" 
                onClick={()=>redireccionarEdicion(producto)} > 
                Editar
                </button>
                <button
                type="button"
                className="btn btn-danger"
                onClick={e=>onClick(producto.id)}
                >Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Producto;