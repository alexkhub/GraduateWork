import React, { useState, useEffect } from 'react';
import Pair from "../pair/pair";
// import DoublePair from "../doublePair/doublePair";

function DailySchedule(props) {
    const [dataSubject, setSubjectData] = useState('');
    const [dataLecturer, setLecturerData] = useState('');
    const [dataAudience, setAudienceData] = useState('');
    const [dataStartTime, setStartTimeData] = useState('');
    const [dataEndTime, setEndTimeData] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api-timetable/timetable/4-1is/')
            .then(response => response.json())
            .then(data => {
                setSubjectData(data.timetable[0].subject);
                setLecturerData(data.timetable[0].lecturer.user);
                setAudienceData(data.timetable[0].classroom);
                setStartTimeData(data.timetable[0].start_time);
                setEndTimeData(data.timetable[0].end_time);
        })
    }, []);
    return (
        <>
            <tr>
                <td></td>
                <td className="day">{props.day}</td>
                <td></td>
            </tr>
            
            <Pair
                pairNumber='1'
                subjectName={dataSubject}
                teacherName={dataLecturer}
                audience={dataAudience}
                time={`${dataStartTime} - ${dataEndTime}`}
            />

            {/* <Pair
                pairNumber='2'
                subjectName={props.secondSubjectName}
                teacherName={props.secondTeacherName}
                audience={props.secondAudience}
                time="10:40 - 12:10"
            />

            <Pair
                pairNumber='3'
                subjectName={props.thirstSubjectName}
                teacherName={props.thirstTeacherName}
                audience={props.thirstAudience}
                time="12:50 - 14:20"
            />

            <Pair
                pairNumber='4'
                subjectName={props.fourthSubjectName}
                teacherName={props.fourthTeacherName}
                audience={props.fourthAudience}
                time="14:30 - 16:00"
            /> */}
        </>
    )
}

export default DailySchedule;