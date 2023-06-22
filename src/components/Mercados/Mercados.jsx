import React from 'react';

function Mercados (props){
    return (
        <div className="mercados">
            <div className="logoMercado">
                <img className='imagenLogo' src={props.img} alt="imagen" />
            </div>

            <div className="textoMercado">
                <h2 className="nombreMercado">{props.nombreMercado}</h2>
                <h3 className="infoMercado">Abierto hasta {props.horarioMercado} </h3>
                <h3 className="infoMercado">Entrega {props.entregaMercado}</h3>
                <h3 className="infoMercado"> Tipo de pago {props.modoPago}</h3>
            </div>
        </div>
    )
}

export default Mercados;