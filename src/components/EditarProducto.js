import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { editarProductoAction } from '../actions/productoActions';

const EditarProducto = () => {

    //Mandar a llamar el dispatch
    const dispatch=useDispatch();
    
    const [producto, setProducto] = useState({
        nombre:'',
        precio:''
    });
    //Usar el state del producto a editar
    const productoEditar=useSelector(state=>state.productos.productoEditar);

    //Llenar automaticamente nuestro state con los datos del producto del state
    useEffect(() => {
       setProducto(productoEditar)
    }, [productoEditar])

    const onChange=e=>{
        setProducto({
            ...producto,
            [e.target.name]:e.target.value
        })
    }

    //Unir con la funcion que edita el producto
    const onSubmit=e=>{
        e.preventDefault();

        if (producto.nombre.trim()==='' || producto.precio<=0) {
            alert('El precio debe ser mayor a cero y el nombre no puede ir vacío.');
            return;
        }

        dispatch(editarProductoAction({
            nombre:producto.nombre,
            precio:Number(producto.precio),
            id:productoEditar.id
        }))

        setProducto({
            nombre:'',
            precio:''
        })
    }


    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4font-weight-bold">
                            Editar producto
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
                                value={producto.nombre}
                                onChange={onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto:</label>
                                <input
                                type="number"
                                className="form-control"
                                placeholder="Precio"
                                name="precio"
                                value={producto.precio}
                                onChange={onChange}
                                />
                            </div>
                            <button
                            type="submit"
                            className="btn btn-primary btn-block font-weight-bol text-uppecase"
                            >Guardar cambios</button>
                        </form>
                    </div>
                </div>
            </div>        
        </div>
     );
}
 
export default EditarProducto;