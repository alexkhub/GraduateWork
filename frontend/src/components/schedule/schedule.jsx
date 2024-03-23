import DailySchedule from './DailySchedule/DailySchedule';
import React, { useState, useEffect } from 'react';
import Pair from './Pair/Pair';
import DoublePair from './DoublePair/DoublePair';
import './Schedule.css';
import axios from 'axios';

function Schedule() {
    const [data, setData] = useState('');

    const mondayPairs = [];
    const tuesdayPairs = [];
    const wednesdayPairs = [];
    const thursdayPairs = [];
    const fridayPairs = [];

    let group = '4-1is';
    useEffect(() => {
           axios.get(`http://127.0.0.1:8000/api-timetable/timetable/${group}/`)
           .then(data => setData(data.data.timetable))
    }, []);

    for (let i = 0; i < data.length; i++) {

        data[i].lecturer.user = data[i].lecturer.user.replace('-', ' ').replace('_', ' ')
        
        let pair =
            <Pair
                pairNumber={data[i].lesson_number}
                subjectName={data[i].subject}
                teacherName={data[i].lecturer.user}
                audience={data[i].classroom}
                time={`${data[i].start_time} - ${data[i].end_time}`}
            />;

        if (data[i].evenness === 'совмещенная') {
            pair = <DoublePair
                pairNumber={data[i].lesson_number}
                subjectName={data[i].subject}
                teacherName={data[i].lecturer.user}
                audience={data[i].classroom}
                time={`${data[i].start_time} - ${data[i].end_time}`}
                secondSubjectName=''
                secondTeacherName=''
                secondAudience=''
            />;
        }

        switch (data[i].day_of_the_week) {
            case 'понедельник' || 'Понедельник':
                mondayPairs.push(pair)
                break;
            case 'вторник' || 'Вторник':
                tuesdayPairs.push(pair)
                break
            case 'среда' || 'Среда':
                wednesdayPairs.push(pair)
                break;
            case 'четверг' || 'Четверг':
                thursdayPairs.push(pair)
                break;
            case 'пятница' || 'Пятница':
                fridayPairs.push(pair)
                break;
            default:
                return
        }
    }

    return (
        <>
            <div className="daily-schedule schedule-content">
                <p>Расписание на сегодня</p>
                <table className="daily-schedule">
                    <tbody>
                        <DailySchedule
                            day='Понедельник'
                            pairs={mondayPairs}
                        />
                    </tbody>
                </table>
            </div>

            <div className="weekly-schedule schedule-content">
                <p>Расписание на неделю</p>

                <table className="daily-schedule">
                    <tbody>
                        <DailySchedule
                            day='Понедельник'
                            pairs={mondayPairs}
                        />
                        <DailySchedule
                            day='Вторник'
                            pairs={tuesdayPairs}
                        />
                        <DailySchedule
                            day='Среда'
                            pairs={wednesdayPairs}
                        />
                        <DailySchedule
                            day='Четверг'
                            pairs={thursdayPairs}
                        />
                        <DailySchedule
                            day='Пятница'
                            pairs={fridayPairs}
                        />
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Schedule;