import { Link } from "react-router-dom";
import MenuBurger from "./MenuBurger/MenuBurger";

function Header(props) {
  return (
    <header>
      <Link to="/profile" className="logo link-button">
        <i className="fas fa-book"></i>
        <p>Fin Manager</p>
      </Link>
      <MenuBurger isAuthorized = {props.isAuthorized} isStuff = {props.isStuff} />
    </header>
  );
}

export default Header;
