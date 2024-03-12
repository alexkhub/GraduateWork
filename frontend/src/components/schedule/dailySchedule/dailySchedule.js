import React, { useState, useEffect } from 'react';
import Pair from "../pair/pair";
// import DoublePair from "../doublePair/doublePair";

function DailySchedule(props) {
    const [data, setData] = useState('');
    const pairs = [];
    let group = '4-1is';

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api-timetable/timetable/${group}/`)
            .then(response => response.json())
            .then(data => {
                setData(data.timetable);
            })
    }, []);

    for (let i = 0; i < data.length; i++) {
        pairs.push(
            <Pair
                pairNumber={JSON.stringify(data[i].lesson_number)}
                subjectName={JSON.stringify(data[i].subject)}
                teacherName={JSON.stringify(data[i].lecturer.user)}
                audience={JSON.stringify(data[i].classroom)}
                time={`${JSON.stringify(data[i].start_time)} - ${JSON.stringify(data[i].end_time)}`}
            />
        )
    }

    if (data) {
        return (
            <>
                <tr>
                    <td></td>
                    <td className="day">{props.day}</td>
                    <td></td>
                </tr>

                {pairs}

            </>
        )
    }
}

export default DailySchedule;