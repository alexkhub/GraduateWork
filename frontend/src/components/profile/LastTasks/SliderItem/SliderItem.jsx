import { Link } from 'react-router-dom';

function SliderItem(props) {
    return (
        <div className="last-tasks-item">
            <div>
                <p>{props.teacherName}</p>
                <p>{props.subjectName}</p>
            </div>
            <p className="task-data">{props.taskDate}</p>
            <p className={props.taskStatus === 'Сдано' ? 'task-status last-task-done' : 'task-status last-task-failed'}>{props.taskStatus}</p>
            <Link to="/">Посмотреть</Link>
        </div>
    )
}

export default SliderItem;