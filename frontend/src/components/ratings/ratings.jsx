import React, { useState, useEffect } from 'react';
import Rating from './Rating/Rating';
import Filter from './Filter/Filter';
import './Ratings.css';
import axios from 'axios';

function Ratings() {
    const [data, setData] = useState('');
    const ratings = [];
    let user = 'alexkhub';

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api-student_performance/scores/${user}/`)
            .then(data => setData(data.data.measurable_types_control))
    }, []);

    for (let i = 0; i < data.length; i++) {

        data[i].lecturer.user = data[i].lecturer.user.replace('-', ' ').replace('_', ' ');

        ratings.push(
            <Rating
                subjectName={data[i].subject}
                lecturer={data[i].lecturer.user}
                score={data[i].points}
                date={data[i].date}
            />
        )
    }
    return (
        <>
            <div className="rating-content">
                <Filter />
                <div className="ratings">
                    {ratings}
                </div>
            </div>
        </>
    )
}

export default Ratings;