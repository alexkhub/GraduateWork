import { Link } from "react-router-dom";

function LastWeekTaskItem(props) {
  return (
    <Link to="/404" className="last-weeks-tasks-item">
      <p className="last-weeks-tasks-item__teacher">{props.teacherName}</p>
      <div>
        <p className="last-weeks-tasks-item__subject">{props.subjectName}</p>
        <p className={props.taskStatus ? "last-weeks-task-done"  : "last-weeks-task-failed"}>
          {props.taskStatus ? 'Сдано' : 'Просрочено'}
        </p>
      </div>
    </Link>
  );
}

export default LastWeekTaskItem;
