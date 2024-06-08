import { Link } from "react-router-dom";

function SliderItem(props) {
  return (
    <div className="last-tasks-item">
      <div>
        <p>{props.teacherName}</p>
        <p>{props.subjectName}</p>
      </div>
      <p className="task-data">{props.taskDate}</p>
      <p
        className={`task-status last-task-${
          props.taskStatus === "Сдано" ? "done" : "failed"
        }`}
      >
        {props.taskStatus}
      </p>
      <Link to="/tasks">Посмотреть</Link>
    </div>
  );
}

export default SliderItem;
