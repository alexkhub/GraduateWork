import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="error-content">
      <div className="error-description">
        <p>
          Ошибка <span className="error-code">401</span>
        </p>
        <p className="error-reason">Пользователь не авторизован</p>
      </div>
      <Link to="/login">Авторизоваться</Link>
    </div>
  );
}

export default Unauthorized;
