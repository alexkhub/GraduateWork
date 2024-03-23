import React, { useState, useEffect } from 'react';
import Pair from "../pair/pair";
// import DoublePair from "../doublePair/doublePair";

function DailySchedule(props) {


    return (
        <>
            <tr>
                <td></td>
                <td className="day">{props.day}</td>
                <td></td>
            </tr>
        </>
    )
}

export default DailySchedule;