import React from "react";
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <a href="profile.html" class="logo">
                    <i class="fas fa-book"></i>
                    <p>Homework Manager</p>
                </a>
                <nav>
                    <ul>
                        <li><a href="tasks.html">Задания</a></li>
                        <li><a href="registration.html">Регистрация</a></li>
                        <li><a href="">Выйти</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;