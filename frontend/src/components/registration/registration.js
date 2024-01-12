import React from "react";
import {Link} from 'react-router-dom';
import './registration.css';

class Registration extends React.Component {
    render() {
        return (
            <div className="registration-content">
                <form className="registration-form">
                    <div className="registration-title-container">
                        <p className="registration-title">Регистрация</p>
                        <div className="registration-title-line"></div>
                    </div>
                    <div className="registration-form-content">
                        <input type="text" name="" id="firstname-input" placeholder="Имя" />
                        <input type="text" name="" id="lastname-input" placeholder="Фамилия" />
                        <input type="email" name="" id="email-input" placeholder="Почта" />
                        <input type="text" name="" id="username-input" placeholder="Имя пользователя" />
                        <input type="password" name="" id="registration-password" placeholder="Введите пароль" />
                        <input type="password" name="" id="repeat-registration-password" placeholder="Подтвердите пароль" />
                        <input type="tel" name="" id="tel-input" placeholder="Введите номер телефона" />
                        <input type="text" name="" id="group-input" placeholder="Группа" />
                        <button id="register-button">Зарегистрироваться</button>
                    </div>
                        <div className="registration-links">
                            <Link to="/" className="link-button">Сбросить пароль</Link>
                            <Link to="/login" className="link-button">Авторизация</Link>
                        </div>
                </form>
            </div>
        )
    }
}

export default Registration;