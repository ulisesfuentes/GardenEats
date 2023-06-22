import React from 'react';
import Mercados from './src/components/Mercados/Mercados';
import Header from './src/components/Header/Header.jsx';
import logohome from './src/Imagenes/gardenlogo1.png'
import logo from './src/Imagenes/iconMenu.png'
import carniceria from './src/Imagenes/carniceria.png'
import verduleria from './src/Imagenes/logo.jpg'
import Carniceria2 from './src/Imagenes/logo2.jpg'
import semilleria from './src/Imagenes/logo3.jpg'
import './App.css';
import Buscador from './src/components/Buscador/Buscador';


function App() {
  const handleSearch = (query) => {
    // Lógica de búsqueda
    console.log('Búsqueda:', query);
    // Realiza la lógica de búsqueda con el valor 'query'
  };

  return (
    <div className="App">
      <Header img={logohome} logo={logo} />
      <Buscador onSearch={handleSearch} />
      <Mercados
        img={carniceria}
        nombreMercado="Carniceria- Fresh Meat"
        horarioMercado="22:00"
        entregaMercado="Con delivery"
        modoPago="Online"
      />
      <Mercados
        img={verduleria}
        nombreMercado="La verduleria-Verdura"
        horarioMercado="22:00"
        entregaMercado="Con delivery"
        modoPago="Online"
      />
      <Mercados
        img={Carniceria2}
        nombreMercado="Carniceria-Meat"
        horarioMercado="21:00"
        entregaMercado="Sin delivery"
        modoPago="Online/Efectivo"
      />
      <Mercados
        img={semilleria}
        nombreMercado="Semilleria- Manos de Tierra"
        horarioMercado="20:30"
        entregaMercado="Sin delivery"
        modoPago="Online/Efectivo"
      />
    </div>
  );
}

export default App;
