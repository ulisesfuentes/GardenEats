import React,{useState} from "react";

const RestaurantInterface = () =>{
    // Estado para el horario de apertura y cierre
    const [apertura, setApertura] = useState ("");
    const [cierre, setCierre] = useState("");

    // Estado para las promociones y envios gratis
    const [promo, setPromo] = useState("");
    const [envioGratis, setEnvioGratis] = useState (false);

    // Estado para los pedidos y su historial
    const [pedidos, setPedidos] = useState ([]);
    const [historial, setHistorial] = useState ([]);

    // Funcion para editar el horario de apertura y cierre 
    const editarApertura = (e) =>{
        setApertura(e.target.value);
    };
    const editarCierre = (e) => {
        setCierre(e.target.value);
    };

    // Funcion para realizar promociones 
    const editarPromo = (e) =>{
        setPromo (e.target.value);
    };

    // Funcion para editar envios gratis
    const editarEnvioGratis = () => {
        setEnvioGratis(!envioGratis);
    };

    // Funcion para recibir y gestionar pedidos
    const editarNuevosPedidos = (nuevoPedido) => {
        setPedidos([...pedidos, nuevoPedido]);
      };
      
    const gestionarPedido = (pedidoId, estado) => {
        const pedidosActualizados = pedidos.map((pedido) => {
        if (pedido.id === pedidoId) {
            return { ...pedido, estado };
        }
          return pedido;
        });
        setPedidos(pedidosActualizados);
      };
      
    // Funcion para mostrar el historial de pedidos
    const mostrarHistorial = () =>{
        return historial.map((pedido)=>(
            <div key={pedido.id}>
                <p>Pedido ID: {pedido.id}</p>
                <p>Estado: {pedido.estado}</p>
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
            <label>Envio Gratis:</label>
            <input type="checkbox" checked={envioGratis} onChange={editarEnvioGratis} />
            
            <h2>Pedidos en Tiempo Real</h2>
            <div>
                {pedidos.map((pedido) => (
                <div key={pedido.id}>
                <p>Pedido ID: {pedido.id}</p>
                <p>Estado: {pedido.estado}</p>
                <button onClick={() => gestionarPedido(pedido.id, "accepted")}>Aceptar</button>
                <button onClick={() => gestionarPedido(pedido.id, "rejected")}>Rechazar</button>
                </div>
                ))}
            </div>
            <h2>Historial de Pedidos</h2>
            {mostrarHistorial()}
        </div>
    );
};
export default RestaurantInterface;