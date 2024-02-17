import './student-info.css';
import StudentSettings from './studentSettings/studentSettings';
import axios from 'axios';

function StudentInfo() {

    return (
        <div className="student-info">
            <StudentSettings />
            <div className="student-characteristics">
                <p className="characteristics-item student-name">Хадиков Георгий Сосланович</p>
                <p className="characteristics-item student-birthday-date">28.03.2004</p>
                <div>
                    <p className="characteristics-item student-group">3-ИС</p>
                </div>
            </div>
        </div>
    )
}

export default StudentInfo;