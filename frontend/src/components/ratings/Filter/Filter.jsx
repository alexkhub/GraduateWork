import React, { useState, useEffect } from 'react';
import Discipline from './Discipline/Discipline';
import './Filter.css';

function Filter() {
    const [isOpen, toggleOpen] = useState(true);
    const [disciplines] = useState([]);
    
    function toggleFilters() {
        toggleOpen(!isOpen);
    }
    
    useEffect(() => {
        const subjectsNames = document.querySelectorAll('.rating-subject-name');
        subjectsNames.forEach((el, index) => {
            disciplines.push(<Discipline disciplineName={el.textContent} id={index} />)
        })
    });

    return (
        <>
            <div className="subject-filter" onClick={toggleFilters}>
                <i className="fas fa-filter"></i>
            </div>
            <div className={isOpen ? 'filters-container filters-container__unactive' : 'filters-container filters-container__active'}>
                <div>
                    <i className="fas fa-times" onClick={toggleFilters}></i>
                    <p className="filters-title">Фильтр</p>
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