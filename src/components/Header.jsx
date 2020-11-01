import React from 'react';
import logo from '../logo-1.svg';

function Header() {
    return(
        <header className='header'>
				<img src={logo} className='App-logo' alt="logo"></img>
			</header>
    )
}

export default Header;