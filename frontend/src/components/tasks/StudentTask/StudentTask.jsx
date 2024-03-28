import "./StudentTask.css";

function StudentTask(props) {
  return (
    <div className="student-task">
      <div className="student-task-info">
        <p>{props.studentTaskName  ? props.studentTaskName : 'Нет названия'}</p>
        <p className={props.studentTaskStatus ? 'student-task-done' : 'student-task-failed'}>{props.studentTaskStatus ?  'Сдано' : 'Просрочено'}</p>
        <p>{props.studentTaskDate}</p>
      </div>
      <div className="student-task-comment">
        <p>{props.studentTaskComment}</p>
      </div>
      <div className="student-task-buttons">
        <i className="fas fa-download"></i>
        <i className="fas fa-edit"></i>
      </div>
    </div>
  );
}

export default StudentTask;
