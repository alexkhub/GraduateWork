import { Link } from 'react-router-dom';
import './SliderItem.css'

function SliderItem(props) {
    return (
        <div className="failed-tasks-item">
            <div>
                <p>{props.teacherName}</p>
                <p>{props.subjectName}</p>
            </div>
            <p className="task-data">{props.taskDate}</p>
            <p className="task-failed">{props.taskStatus}</p>
            <Link to="/">Посмотреть</Link>
        </div>
    )
}

export default SliderItem;