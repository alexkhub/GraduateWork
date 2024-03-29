import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LastWeekTaskItem.css'

function TaskItem(props) {

    const [taskStatus] = useState(props.taskStatus)

    return (
        <Link to="/" className="last-weeks-tasks-item">
        <p className="last-weeks-tasks-item__teacher">{props.teacherName}</p>
        <div>
            <p className="last-weeks-tasks-item__subject">{props.subjectName}</p>
            <p className={taskStatus === 'Сдано' ? 'last-weeks-tasks-item__status last-weeks-task-done' : 'last-weeks-tasks-item__status last-weeks-task-failed'}>{props.taskStatus}</p>
        </div>
    </Link>
    )
}


export default TaskItem;