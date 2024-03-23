import DailySchedule from './dailySchedule/dailySchedule';
import React, { useState, useEffect } from 'react';
import Pair from './pair/pair';
import './schedule.css';

function Schedule() {
    const [data, setData] = useState('');

    const mondayPairs = [];
    const tuesdayPairs = [];
    const wednesdayPairs = [];
    const thursdayPairs = [];
    const fridayPairs = [];

    let group = '4-1is';
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api-timetable/timetable/${group}/`)
            .then(response => response.json())
            .then(data => {
                setData(data.timetable);
            })
    }, []);

    for (let i = 0; i < data.length; i++) {
        const pair =
            <Pair
                pairNumber={JSON.stringify(data[i].lesson_number)}
                subjectName={JSON.stringify(data[i].subject)}
                teacherName={JSON.stringify(data[i].lecturer.user)}
                audience={JSON.stringify(data[i].classroom)}
                time={`${JSON.stringify(data[i].start_time)} - ${JSON.stringify(data[i].end_time)}`}
            />;

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
                            pairs = {tuesdayPairs}
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