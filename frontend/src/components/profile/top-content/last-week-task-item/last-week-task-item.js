import { Link } from 'react-router-dom';

function TaskItem(props) {
    return (
        <Link to="/" className="last-weeks-tasks-item">
        <p className="last-weeks-tasks-item__teacher">{props.teacherName}</p>
        <div>
            <p className="last-weeks-tasks-item__subject">{props.subjectName}</p>
            <p className="last-weeks-tasks-item__status task-done">{props.taskStatus}</p>
        </div>
    </Link>
    )
}


export default TaskItem;