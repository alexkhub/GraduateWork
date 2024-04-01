import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  function login() {
    const loginInput = document.querySelector("#login-input").value;
    const passwordInput = document.querySelector("#password-input").value;

    if (!localStorage.getItem("JWT")) {
      axios
        .post("http://127.0.0.1:8000/auth/jwt/create/", {
          username: passwordInput,
          password: loginInput,
        })
        .then((data) => {
          localStorage.setItem("JWT", data.data.access);
          localStorage.setItem("Refresh", data.data.refresh);

          if (data.status === 200) {
            window.location.href = "/profile";
          }
        });
    } else {
      window.location.href = "/profile";
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
            <input type="text" id="login-input" placeholder="Логин" required />
          </div>
          <div>
            <input
              type="password"
              id="password-input"
              placeholder="Пароль"
              autoComplete="false"
              required
            />
          </div>
          <button onClick={login} type="button">
            Войти
          </button>
          <div className="login-links">
            <Link to="/404" className="link-button">
              Сбросить пароль
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
