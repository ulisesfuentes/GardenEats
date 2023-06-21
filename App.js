import React from 'react';
import Mercados from './src/components/Mercados/Mercados';
import carniceria from './src/Imagenes/carniceria.png'
import './App.css';

function App () {
  return (
    <div className="App">
      <Mercados img={carniceria} nombreMercado="La verduleria-Verdura" horarioMercado="22:00" entregaMercado="Con delivery" modoPago="Online"/>
      <Mercados/>
    </div>
  );
}

export default App;