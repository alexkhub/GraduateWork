import './header.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuBurger from './menuBurger/menuBurger';

function Header() {

    const [isOpen, openMenu] = useState(false);
    function menuToggle() {
        openMenu(!isOpen);
    }

    return (
        <header>
            <Link to="/profile" className="logo link-button">
                <i className="fas fa-book"></i>
                <p>Fin Manager</p>
            </Link>
            <MenuBurger />
        </header>
    )
}

export default Header;