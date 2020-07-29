import React from 'react'
import Logo from '../../assests/img/logo.png'
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Brunoflix logo" />
            </a>

            <a className="ButtonLink" href="/">
                Novo Vídeo
            </a>
        </nav>
    );
}

export default Menu 