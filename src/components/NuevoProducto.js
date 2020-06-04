import React from 'react';

const NuevoProducto = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8 mt-3">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4font-weight-bold">
                            Agregar producto
                        </h2>
                        <form>
                            <div className="form-group">
                                <label>Nombre Producto:</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre producto"
                                name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto:</label>
                                <input
                                type="number"
                                className="form-control"
                                placeholder="Precio"
                                name="precio"
                                />
                            </div>
                            <button
                            type="submit"
                            className="btn btn-primary btn-block font-weight-bol text-uppecase"
                            >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>        
        </div>
     );
}
 
export default NuevoProducto;