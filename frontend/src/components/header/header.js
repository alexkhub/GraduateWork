import './header.css';
import { Link } from 'react-router-dom';
import MenuBurger from './menuBurger/menuBurger';

function Header() {

    return (
        <header>
            <Link to="/profile" className="logo link-button">
                <i className="fas fa-book"></i>
                <p>Fin Manager</p>
            </Link>
            <MenuBurger />
        </header>
    )
}

export default Header;