import React from "react";
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <button className="logo link-button">
                    <i className="fas fa-book"></i>
                    <p>Homework Manager</p>
                </button>
                <nav>
                    <ul>
                        <li><button className="link-button">Задания</button></li>
                        <li><button className="link-button">Регистрация</button></li>
                        <li><button className="link-button">Выйти</button></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;