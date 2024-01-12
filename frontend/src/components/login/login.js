import React from "react";
import { Link } from 'react-router-dom';
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="content">
                <form>
                    <div className="login-title-container">
                        <p className="login-title">Авторизация</p>
                        <div className="login-title-line"></div>
                    </div>
                    <div className="form-content">
                        <div>
                            <input type="email" id="login-input" placeholder="Логин" />
                        </div>
                        <div>
                            <input type="password" id="login-password" placeholder="Пароль" />
                        </div>
                        <button>Войти</button>
                        <div className="login-links">
                            <Link to="/" type="button" className="link-button">Сбросить пароль</Link>
                            <Link to="/registration" className="link-button">Регистрация</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;