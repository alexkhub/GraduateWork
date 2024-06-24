import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [passwordValue, setPasswordValue] = useState("");
  const [loginValue, setLoginValue] = useState("");

  function login() {
    if (!localStorage.getItem("JWT")) {
      axios
        .post("http://127.0.0.1:8000/auth/jwt/create/", {
          username: loginValue,
          password: passwordValue,
        })
        .then((data) => {
          console.log(data);
          if (data.status === 200) {
            localStorage.setItem("JWT", data.data.access);
            localStorage.setItem("Refresh", data.data.refresh);
            window.location.href = "/profile";
          }
        });
    }
  }

  function loginOnEnterKey(e) {
    if (e.key === "Enter") {
      login();
    }
  }

  return (
    <div className="content">
      <form className="login-form">
        <div className="login-title-container">
          <p className="login-title">Авторизация</p>
          <div className="login-title-line"></div>
        </div>
        <div className="form-content">
          <div>
            <input
              type="text"
              id="login-input"
              placeholder="Логин"
              autoComplete="false"
              onChange={(e) => setLoginValue(e.target.value)}
              onKeyDown={loginOnEnterKey}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password-input"
              placeholder="Пароль"
              autoComplete="false"
              onChange={(e) => setPasswordValue(e.target.value)}
              onKeyDown={loginOnEnterKey}
              required
            />
          </div>
          <button onClick={login} type="button">
            Войти
          </button>
          <div className="login-links">
            <Link to="/404" className="reset-password-link">
              Сбросить пароль
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
