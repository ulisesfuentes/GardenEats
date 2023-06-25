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
};