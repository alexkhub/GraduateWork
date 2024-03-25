import './TeachersPair.css';

function TeachersPair(props) {
    return (
        <tr>
            <td className="pair">{props.pairNumber} пара</td>
            <td className="subject">{props.subjectName}<br />{props.groupName}</td>
            <td className="audience">{props.audience} ауд.<br />{props.time}</td>
        </tr>
    )
}

export default TeachersPair;