import React, { Fragment,useEffect } from 'react';
import clienteAxios from '../config/axios';
import {useSelector, useDispatch} from 'react-redux';
import {consultarProductosAction} from '../actions/productoActions';
import Producto from './Producto';

const Productos = () => {
    const dispatch=useDispatch();
    const eliminado=useSelector(state=>state.productos.eliminado);
        useEffect(()=>{
            const consultarApi=()=>dispatch(consultarProductosAction());
            consultarApi();
        },[]);

    //Acceder al state mediante useSelector
    const cargando=useSelector(state=>state.productos.loading);
    const error= useSelector(state=>state.productos.error);
    const productos=useSelector(state=>state.productos.productos);
        
    return ( 
        <Fragment>
            <h2 className="text-center my-5">Desde Productos</h2>

            {productos.length===0 
            ? 'No hay productos'
            :
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col" className="text-center">Nombre</th>
                        <th scope="col" className="text-right">Precio</th>
                        <th scope="col" className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto=>(
                        <Producto
                        key={producto.id}
                        producto={producto}
                        />
                    ))}
                </tbody>
            </table>
            }
            {error? <p className="alert alert-danger text-center py-3 px-5">Hubo un error</p>:null}
        </Fragment>
     );
}
 
export default Productos;