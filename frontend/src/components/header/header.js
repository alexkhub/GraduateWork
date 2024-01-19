import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/profile" className="logo link-button">
                <i className="fas fa-book"></i>
                <p>Homework Manager</p>
            </Link>
            <nav>
                <ul>
                    <li><Link to="/tasks" className="link-button">Задания</Link></li>
                    <li><Link to="/registration" className="link-button">Регистрация</Link></li>
                    <li><Link to="/schedule" className="link-button">Расписание</Link></li>
                    <li><Link to="/" className="link-button">Выйти</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;