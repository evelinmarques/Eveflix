import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() { //componentes sempre devem ser declarados em letra maiúscula
    return (
        <nav className="Menu"> 
            <a href="/">
            <img className="Logo" src={Logo} alt="Eveflix logo" />
            </a>
        
            <ButtonLink className="ButtonLink" href="/"> 
                Novo vídeo 
            </ButtonLink> 
        </nav>
    );
}
            // ButtonLink cria botão na nav de Novo vídeo
export default Menu;
