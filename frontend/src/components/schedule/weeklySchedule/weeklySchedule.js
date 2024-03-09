import React, { useState, useEffect } from 'react';
import DailySchedule from '../dailySchedule/dailySchedule';
// import DoublePair from "../doublePair/doublePair";

function WeeklySchedule(props) {
    return (
        <>
            <tr>
                <td></td>
                <td className="day">{props.day}</td>
                <td></td>
            </tr>

            <DailySchedule
                day='Понедельник'
            />
            <DailySchedule
                day='Вторник'
            />

        </>
    )
}

export default WeeklySchedule;