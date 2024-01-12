import React from "react";
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <p>{this.props.pageTitle}</p>
            </header>
        )
    }

    inputClick() {
        console.log('Clicked');
    }
}

export default Header;