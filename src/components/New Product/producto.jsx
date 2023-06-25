import React, { useState } from "react";
const FormularioNuevoProducto = () =>{
    const [nombre, setName] = useState ("");
    const [precio, setPrecio] = useState ("");
    const [descripcion, setDescripcion ] = useState ("");

    const enviar = (e) =>{
        e.prevenir();
    }
}