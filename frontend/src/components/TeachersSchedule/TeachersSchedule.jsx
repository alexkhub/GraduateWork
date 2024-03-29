import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DailySchedule from './TeachersDailySchedule/TeachersDailySchedule';
import DoublePair from './TeachersDoublePair/TeachersDoublePair';
import Teachers from './TeachersPair/TeachersPair';
import './TeachersSchedule.css';

function TeachersSchedule() {
    const [pairs, setPairs] = useState('');
    const mondayPairs = [];
    const tuesdayPairs = [];
    const wednesdayPairs = [];
    const thursdayPairs = [];
    const fridayPairs = [];

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api-timetable/timetable_lector/`)
            .then(data => setPairs(data.data.lector_timetable))
        }, []);

    console.log(pairs)

    for (let i = 0; i < pairs.length; i++) {
        pairs[i].lecturer.user = pairs[i].lecturer.user.replace('-', ' ').replace('_', ' ')

        let pair = <Teachers pairNumber={pairs[i].lesson_number} subjectName={pairs[i].subject} groupName={pairs[i].group} audience={pairs[i].classroom} time={`${pairs[i].start_time} - ${pairs[i].end_time}`} key={pairs[i].id} />;

        if (pairs[i].evenness === 'совмещенная') {
            pair = <DoublePair
                pairNumber={pairs[i].lesson_number}
                subjectName={pairs[i].subject}
                groupName={pairs[i].group}
                audience={pairs[i].classroom}
                time={`${pairs[i].start_time} - ${pairs[i].end_time}`}
                secondSubjectName=''
                secondGroupName=''
                secondAudience=''
                key={pairs[i].id}
            />;
        }

        switch (pairs[i].day_of_the_week) {
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
                <p>Расписание на завтра</p>
                <table className="daily-schedule">
                    <tbody>
                        <DailySchedule day='Понедельник' pairs={mondayPairs} />
                    </tbody>
                </table>
            </div>

            <div className="weekly-schedule schedule-content">
                <p>Расписание на неделю</p>
                <table className="daily-schedule">
                    <tbody>
                        <DailySchedule day='Понедельник' pairs={mondayPairs} />
                        <DailySchedule day='Вторник' pairs={tuesdayPairs} />
                        <DailySchedule day='Среда' pairs={wednesdayPairs} />
                        <DailySchedule day='Четверг' pairs={thursdayPairs} />
                        <DailySchedule day='Пятница' pairs={fridayPairs} />
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default TeachersSchedule;