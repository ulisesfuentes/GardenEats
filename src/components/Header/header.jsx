import React from 'react';

function Header(props){
    return (
        <div className="header">
          <img className='logohome' src={props.img} alt="logo" />
        </div>
    )
}

export default Header;