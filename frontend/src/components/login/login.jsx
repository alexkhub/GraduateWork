import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  function login() {
    const loginInput = document.querySelector("#login-input").value;
    const passwordInput = document.querySelector("#password-input").value;

    if (localStorage.getItem("JWT") === null) {
      axios
        .post("http://127.0.0.1:8000/auth/jwt/create/", {
          username: passwordInput,
          password: loginInput,
        })
        .then((data) => {
          localStorage.setItem("JWT", data.data.access);
        });
    }
  }
  axios.defaults.headers.common.Authorization = `JWT ${localStorage.getItem(
    "JWT"
  )}`;

  return (
    <div className="content">
      <form className="login-form">
        <div className="login-title-container">
          <p className="login-title">Авторизация</p>
          <div className="login-title-line"></div>
        </div>
        <div className="form-content">
          <div>
            <input type="text" id="login-input" placeholder="Логин" />
          </div>
          <div>
            <input
              type="password"
              id="password-input"
              placeholder="Пароль"
              autoComplete="false"
            />
          </div>
          <button onClick={login} type="button">
            Войти
          </button>
          <div className="login-links">
            <Link to="/" type="button" className="link-button">
              Сбросить пароль
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
