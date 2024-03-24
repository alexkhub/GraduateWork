import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
    function login() {
        const loginValue = document.querySelector('#login-input').value;
        const passwordValue = document.querySelector('#login-password').value;

        axios.post("http://127.0.0.1:8000/auth/jwt/create/",
            {
                username: loginValue,
                password: passwordValue
            },
            { headers: { 'Content-Type': 'application/json' } })
            .then(
                data => {
                    axios.defaults.headers.common['Authorization'] = `JWT ${data.data.access}`;
                }
            );
    }

    return (
        <div className="content">
            <form className='login-form'>
                <div className="login-title-container">
                    <p className="login-title">Авторизация</p>
                    <div className="login-title-line"></div>
                </div>
                <div className="form-content">
                    <div>
                        <input type="text" id="login-input" placeholder="Логин" />
                    </div>
                    <div>
                        <input type="password" id="login-password" placeholder="Пароль" />
                    </div>
                    <button onClick={login} type='button'>Войти</button>
                    <div className="login-links">
                        <Link to="/" type="button" className="link-button">Сбросить пароль</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;