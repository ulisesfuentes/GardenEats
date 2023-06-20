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

    // Funcion para recibir y gestionar pedidos
    const editarNuevosPedidos = (pedidos) =>{
        setpedido([...pedido, pedidos]);

    };
    const gestionarpedido = (pedidosId, estado) =>{
        const actualizarPedido = pedido.map((pedidos) => {
            if (pedido.id === pedidosId){
                return {...pedidos, estado};
            }
        return pedidos;
        });
        setpedido(actualizarPedido);
    };

    // Funcion para mostrar el historial de pedidos
    const mostrarhistorial = () =>{
        return pedido.map((pedidos)=>(
            <div key={pedidos.id}>
                <p>Pedido ID: {pedidos.id}</p>
                <p>Estado: {pedidos.estado}</p>
            </div>
        ));
    };
    return(
        <div>
            <h1>Restaurant Interface</h1>
            <h2>Horario de Apertura y Cierre</h2>
            <label>Apertura:</label>
            <input type="time" value={apertura} onChange={editarApertura} />
            <label>Cierre:</label>
            <input type="time" value={cierre} onChange={editarCierre} />

            <h2>Promociones y Envio Gratis</h2>
            <label>Promo:</label>
            <input type="text" value={promo} onChange={editarPromo} />


        </div>
    )
}