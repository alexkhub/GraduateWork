import './DailySchedule.css'

function DailySchedule(props) {
    return (
        <>
            <tr>
                <td></td>
                <td className="day">{props.day}</td>
                <td></td>
            </tr>
            {props.pairs}
        </>
    )
}

export default DailySchedule;