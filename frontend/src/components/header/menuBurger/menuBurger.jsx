import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function MenuBurger() {
    const [isOpen, openMenu] = useState(false);
    function menuToggle() {
        openMenu(!isOpen);
    }
    return (
        <nav>
            <div className={isOpen ? 'menu-burger' : 'menu-burger menu-burger__hidden'}>
                <ul>
                    <li><Link to='/404'>Успеваемость</Link></li>
                    <li><Link to='/schedule'>Расписание</Link></li>
                    <li><Link to='/teachers-schedule'>Расписание для преподавателей</Link></li>
                    <li><Link to='/exams'>Экзамены</Link></li>
                    <li><Link to='/tasks'>Задания</Link></li>
                    <li><Link to='/ratings'>Оценки</Link></li>
                    <li><Link to='/replacements'>Замены</Link></li>
                </ul>
            </div>
            <div onClick={menuToggle} className='menu-burger-icon'>
                <div className={isOpen ? 'menu-burger__times-element-1' : 'menu-burger-stick'}></div>
                <div className={isOpen ? 'menu-burger__times-element-2' : 'menu-burger-stick'}></div>
                <div className={isOpen ? 'menu-burger__times-element-3' : 'menu-burger-stick'}></div>
            </div>
            <Link to='/login'>Выйти</Link>
        </nav>
    )
}

export default MenuBurger;