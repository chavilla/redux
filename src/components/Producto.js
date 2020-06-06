import React from 'react';
import {Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eliminarProductoAction } from '../actions/productoActions';


const Producto = ({producto}) => {

    const dispatch=useDispatch();

    const eliminarProducto=id=>dispatch(eliminarProductoAction(id));

    const onClick=id=>{
        eliminarProducto(id)
    }

    return ( 
        <tr>
            <td>{producto.nombre}</td>
            <td className="text-right font-weight-bold">{producto.precio}</td>
            <td className="text-center acciones">
                <Link to={`productos/editar/${producto.id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
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