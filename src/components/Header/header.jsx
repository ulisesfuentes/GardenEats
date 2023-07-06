import React from 'react';
import '../styles/styles.css';

const Header = ({ text }) => {

  const handleSearchClick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
  };

  return (

      <nav>
        <div className="menu-icon">
          <span className="fas fa-bars"></span>
        </div>
        <div className="logo">GardenEats</div>
        
        <div className="search-icon">
          <span className="fas fa-search"></span>
        </div>
        <div className="cancel-icon">
          <span className="fas fa-times"></span>
        </div>
        <form action="#">
          <input type="search" className="search-data" placeholder="Buscar" required/>
          <button type="submit" className="fas fa-search"></button>
        </form>
      </nav>

  );
};

export default Header;

