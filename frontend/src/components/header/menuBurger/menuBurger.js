import './menu-burger.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function MenuBurger() {
    const [isOpen, openMenu] = useState(false);
    function menuToggle() {
        openMenu(!isOpen);
    }
    return (
        <nav>
            <Link to='/login'>Выйти</Link>
            <div onClick={menuToggle} className='menu-burger-icon'>
                <div className='menu-burger-stick'></div>
                <div className='menu-burger-stick'></div>
                <div className='menu-burger-stick'></div>
            </div>
            <div className={isOpen ? 'menu-burger' : 'menu-burger menu-burger__hidden'}>
                <ul>
                    <li><Link to='/404'>Успеваемость</Link></li>
                    <li><Link to='/schedule'>Расписание</Link></li>
                    <li><Link to='/404'>Экзамены</Link></li>
                    <li><Link to='/tasks'>Задания</Link></li>
                    <li><Link to='/404'>Оценки</Link></li>
                    <li><Link to='/404'>Замены</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuBurger;