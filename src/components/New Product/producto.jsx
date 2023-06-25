import React, { useState } from "react";
const FormularioNuevoProducto = () =>{
    const [nombre, setNombre] = useState ("");
    const [precio, setPrecio] = useState ("");
    const [descripcion, setDescripcion ] = useState ("");

    const enviar = (e) =>{
        e.prevenir();
        const NewProduct = {
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
        };
        console.log(NewProduct);
        setNombre("");
        setPrecio("");
        setDescripcion("");
    };
    return(
        <form onSubmit={enviar}>
            <div>
                <label htmlFor="nombre">Nombre: </label>
                <input type="text" id="nombre" value={nombre} onChange={(e)=> setNombre (e.target.value)} />
            </div>
            <div>
                <label htmlFor="precio">Precio: </label>
                <input type="number" id="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </div>
            <div>
                <label htmlFor="descripcion">Descripcion: </label>
                <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion (e.target.value)}></textarea>
            </div>
        </form>
    );
};