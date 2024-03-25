function DoublePair(props) {
    return (
        <>
            <tr>
                <td rowSpan='2' className="pair">{props.pairNumber} пара</td>
                <td className="subject">{props.subjectName}<br />{props.groupName}</td>
                <td className="audience">{props.audience} ауд.<br />{props.time}</td>
            </tr>
            <tr>
                <td className="subject">{props.secondSubjectName}<br />{props.secondGroupName}</td>
                <td className="audience">{props.secondAudience} ауд.<br />{props.time}</td>
            </tr>
        </>
    )
}

export default DoublePair;