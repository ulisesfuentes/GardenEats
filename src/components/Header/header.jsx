import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <img className="logohome" src={props.img} alt="logo" />

      <div className="menu-container">
        <img className="menu" src={props.logo} alt="menu" />
      </div>
    </div>
  );
}



export default Header;