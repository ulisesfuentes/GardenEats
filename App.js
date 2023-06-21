import React from 'react';
import Mercados from './src/components/Mercados/Mercados';
import Header from './src/components/Header/header';
import carniceria from './src/Imagenes/carniceria.png'
import verduleria from './src/Imagenes/logo.jpg'
import './App.css';

function App () {
  return (
    <div className="App">

    <Header/>

    <Mercados img={carniceria} nombreMercado="Carniceria- Fresh Meal" horarioMercado="22:00" entregaMercado="Con delivery" modoPago="Online"/>
    
    <Mercados img={verduleria} nombreMercado="La verduleria-Verdura" horarioMercado="22:00" entregaMercado="Con delivery" modoPago="Online"/>


    </div>
  );
}

export default App;