import React, { useState, useEffect } from 'react';
import Rating from './Rating/Rating';
import Filter from './Filter/Filter';
import './Ratings.css';
import axios from 'axios';

function Ratings() {
    const [rating, setRating] = useState('');
    const ratings = [];
    let user = 'alexkhub';

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api-student_performance/scores/${user}/`)
            .then(data => setRating(data.data.measurable_types_control))
    }, [user]);

    for (let i = 0; i < rating.length; i++) {
        rating[i].lecturer.user = rating[i].lecturer.user.replace('-', ' ').replace('_', ' ');

        ratings.push(
            <Rating
                subjectName={rating[i].subject}
                lecturer={rating[i].lecturer.user}
                score={rating[i].points}
                date={rating[i].date}
                key={rating[i].id}
            />
        )
    }
    return (
        <>
            <div className="rating-content">
                <Filter key='1' />
                <div className="ratings">
                    {ratings}
                </div>
            </div>
        </>
    )
}

export default Ratings;