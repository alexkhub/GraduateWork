import React from "react";
import './header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
                <header>
                    <Link to="/login" className="logo link-button">
                        <i className="fas fa-book"></i>
                        <p>Homework Manager</p>
                    </Link>
                    <nav>
                        <ul>
                            <li><Link to="/" className="link-button">Задания</Link></li>
                            <li><Link to="/registration" className="link-button">Регистрация</Link></li>
                            <li><Link to="/" className="link-button">Выйти</Link></li>
                        </ul>
                    </nav>
                </header>
        )
    }
}

export default Header;