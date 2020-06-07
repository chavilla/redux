import React,{useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
//Actions
import { crearProductoAction } from '../actions/productoActions';
import Productos from './Productos';

const NuevoProducto = () => {

    //State local del componente
    const [nombre,setNombre]=useState('');
    const [precio,setPrecio]=useState('');

    //Llamar al dispatch para comunicarnos con el action
    const dispatch=useDispatch();
    
    //Comunicar el dispatch con el state local
    const addProducto=producto=> dispatch(crearProductoAction(producto));

    //Cuando el usuario haga submit
    const onSubmit=e=>{
        e.preventDefault();
        //Validar
        if(nombre.trim()==='' || precio<=0){
            alert('Todos los campos son obligatorios');
            return;
        }
        //Si no hay errores

        //crear nuevo producto
        addProducto({
            nombre,
            precio
        })

        setNombre('');
        setPrecio('');
    }
    
     //Acceder al state mediante useSelector
     const cargando=useSelector(state=>state.productos.loading);
     const error= useSelector(state=>state.productos.error);

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4font-weight-bold">
                            Agregar producto
                        </h2>
                        <form
                        onSubmit={onSubmit}
                        >
                            <div className="form-group">
                                <label>Nombre Producto:</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre producto"
                                name="nombre"
                                value={nombre}
                                onChange={e=>setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto:</label>
                                <input
                                type="number"
                                className="form-control"
                                placeholder="Precio"
                                name="precio"
                                value={precio}
                                onChange={e=>setPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button
                            type="submit"
                            className="btn btn-primary btn-block font-weight-bol text-uppecase"
                            >Agregar</button>
                        </form>
                        { cargando ? <p>Cargando...</p>:null}
                        { error ? <p className="py-2 bg-danger text-white text-center px-5 mt-4">Hubo un error</p>:null}
                    </div>
                </div>
            </div>        
        </div>
     );
}
 
export default NuevoProducto;