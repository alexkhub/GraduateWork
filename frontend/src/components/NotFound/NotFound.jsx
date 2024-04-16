import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="error-content">
      <div className="error-description">
        <p>
          Ошибка <span className="error-code">404</span>
        </p>
        <p className="error-reason">Эта страница не найдена</p>
      </div>
      <Link to="/profile">На главную</Link>
    </div>
  );
}

export default NotFound;
