import './not-found.css';
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className='not-found-content'>
            <div className='error-description'>
                <p>Ошибка <span className='error-code'>404</span></p>
                <p className='error-reason'>Эта страница не найдена</p>
            </div>
            <Link to="/404">На главную</Link>
        </div>
    )
}

export default NotFound;