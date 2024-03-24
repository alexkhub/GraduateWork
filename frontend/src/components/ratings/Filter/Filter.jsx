import React, { useState } from 'react';
import Discipline from './Discipline/Discipline';
import './Filter.css';

function Filter() {
    const inputs = document.querySelectorAll('.discipline input');
    const ratings = document.querySelectorAll('.rating');
    const [isOpen, toggleOpen] = useState(true);
    const disciplines = [];

    function toggleFilters() {
        toggleOpen(!isOpen);
    }

    function clearFilters() {
        inputs.forEach(input => input.checked = false);
        ratings.forEach(rating => {
            rating.style.opacity = 100;
            rating.style.display = 'flex';
        })
    }

    const subjectsNames = document.querySelectorAll('.rating-subject-name');
    subjectsNames.forEach((el, index) => {
        disciplines.push(<Discipline disciplineName={el.textContent} id={index} />)

        if (disciplines.length > subjectsNames.length) {
            disciplines.length = subjectsNames.length;
        }
    })

    return (
        <>
            <div className="subject-filter" onClick={toggleFilters}>
                <i className="fas fa-filter"></i>
            </div>
            <div className={isOpen ? 'filters-container filters-container__unactive' : 'filters-container filters-container__active'}>
                <div>
                    <i className="fas fa-times" onClick={toggleFilters}></i>
                    <p className="filters-title">Фильтры</p>
                </div>
                <div className="filters-content">
                    <p className='filters-content-title'>Выберите дисциплину:</p>
                    <div className="disciplines">
                        {disciplines}
                    </div>
                    <button className="clear-filter" onClick={clearFilters}>Сбросить фильтр</button>
                </div>
            </div>
        </>
    )
}

export default Filter;