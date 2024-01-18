function DoublePair(props) {
    return (
        <>
            <tr>
                <td rowspan='2' className="pair">{props.pairNumber} пара</td>
                <td className="subject">{props.subjectName}<br />{props.teacherName}</td>
                <td className="audience">{props.audience} ауд.<br />{props.time}</td>
            </tr>
            <tr>
                <td className="subject">{props.secondSubjectName}<br />{props.secondTeacherName}</td>
                <td className="audience">{props.secondAudience} ауд.<br />{props.time}</td>
            </tr>
        </>
    )
}

export default DoublePair;