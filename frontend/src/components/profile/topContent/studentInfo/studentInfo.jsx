import StudentSettings from './StudentSettings/StudentSettings';

function StudentInfo(props) {
    return (
        <div className="student-info">
            <StudentSettings />
            <div className="student-characteristics">
                <p className="characteristics-item student-name">{props.studentName}</p>
                <p className="characteristics-item student-birthday-date">{props.birthdayDate}</p>
                <div>
                    <p className="characteristics-item student-group">{props.group}</p>
                </div>
            </div>
        </div>
    )
}

export default StudentInfo;