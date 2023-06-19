import React,{useState} from "react";

const RestaurantInterface = () =>{
    // Estado para el horario de apertura y cierre
    const [apertura, setapertura] = useState ('');
    const [cierre, setcierre] = useState('');

    // Estado para las promociones y envios gratis
    const [promo, setpromo] = useState('');
    const [enviogratis, setenviogratis] = useState (false);

    // Estado para los pedidos y su historial
    const [pedido, setpedido] = useState ([]);
    const [historial, sethistorial] = useState ('');

    // Funcion para editar el horario de apertura y cierre 
    const editarApertura = (e) =>{
        setapertura(e.target.value);
    };
    const editarCierre = (e) => {
        setcierre(e.target.value);
    };

    // Funcion para realizar promociones 
    const editarPromo = (e) =>{
        setpromo (e.target.value);
    };

    // Funcion para editar envios gratis
    const editarEnvioGratis = () => {
        setenviogratis (!EnvioGratis);
    };

    // Funcion para mostrar el historial de pedidos
    
}