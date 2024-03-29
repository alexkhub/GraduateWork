function Pair(props) {
    return (
        <tr>
            <td className="pair">{props.pairNumber} пара</td>
            <td className="subject">{props.subjectName}<br />{props.teacherName}</td>
            <td className="audience">{props.audience} ауд.<br />{props.time}</td>
        </tr>
    )
}

export default Pair;