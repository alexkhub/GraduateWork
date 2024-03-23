import React, { useState, useEffect } from 'react';
import Discipline from './Discipline/Discipline';
import axios from 'axios';
import './Filter.css';

function Filter() {
    const [isOpen, toggleOpen] = useState(true);
    const [data, setData] = useState('');

    function toggleFilters() {
        toggleOpen(!isOpen);
    }

    let user = 'alexkhub';
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api-student_performance/scores/${user}/`)
            .then(data => setData(data.data.measurable_types_control))
    }, []);

    const disciplines = [];
    
    for (let i = 0; i < data.length; i++) {
        disciplines.push(<Discipline disciplineName={data[i].subject} id={data[i].subject} />);
    }
    
    if (data) {
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
                    <p className='filters-content-title'>Выберите дисциплины:</p>
                    <div className="disciplines">
                        {disciplines}
                    </div>
                </div>
            </div>
        </>
    )}
}

export default Filter;