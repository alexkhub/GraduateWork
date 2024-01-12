import React from "react";
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <div class="content">
                <form action="">
                    <div class="login-title-container">
                        <p class="login-title">Авторизация</p>
                        <div class="login-title-line"></div>
                    </div>
                    <div class="form-content">
                        <div>
                            <input type="email" name="" id="login-input" placeholder="Логин" />
                        </div>
                        <div>
                            <input type="password" name="" id="login-password" placeholder="Пароль" />
                        </div>
                        <button>Войти</button>
                        <div class="login-links">
                            <a href="">Сбросить пароль</a>
                            <a href="">Регистрация</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;