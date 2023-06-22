import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <img className="logohome" src={props.img} alt="logo" />
      <img className="menu" src={props.logo} alt="menu" />
    </div>
  );
}


export default Header;