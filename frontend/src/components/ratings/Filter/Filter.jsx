import React, { useState, useEffect } from 'react';
import Discipline from './Discipline/Discipline';
import './Filter.css';

function Filter() {
    const [isOpen, toggleOpen] = useState(true);
    const disciplines = [];

    function toggleFilters() {
        toggleOpen(!isOpen);
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
                </div>
            </div>
        </>
    )
}

export default Filter;