import React from 'react'
import Logo from '../../assests/img/logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Brunoflix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu 