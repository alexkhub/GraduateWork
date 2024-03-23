import React, {useState, useEffect} from 'react';
import Rating from './rating/rating';
import './ratings.css';

function Ratings() {
    const [data, setData] = useState('');
    const ratings = [];
    let user = 'alexkhub';

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api-student_performance/scores/${user}/`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data.measurable_types_control);
            })
    }, []);

    for (let i = 0; i < data.length; i++) {
        ratings.push(
            <Rating
                subjectName={JSON.stringify(data[i].subject)}
                lecturer={JSON.stringify(data[i].lecturer.user)}
                score={JSON.stringify(data[i].points)}
                date = {JSON.stringify(data[i].date)}
            />
        )
    }
    return (
        <>
            <div className="rating-content">
                <div className="ratings">
                    {ratings}
                </div>
            </div>
        </>
    )
}

export default Ratings;