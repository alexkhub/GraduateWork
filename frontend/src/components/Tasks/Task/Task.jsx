import { useState } from "react";

function Task(props) {
  const [taskClassName, setTaskClassName] = useState(true);

  function openTaskHandler() {
    setTaskClassName(!taskClassName);
  }

  return (
    <div className={taskClassName ? "task-close" : "task-open"}>
      <p className="teacher-name">{props.teacherName}</p>
      <p className="subject-name">{props.subjectName}</p>
      <p className="task-name">{props.taskName}</p>
      {/* Date when task upload */}
      <p className="task-date">{props.taskDate}</p>
      <button onClick={openTaskHandler} className="expand">
        <i
          className={
            taskClassName
              ? "fas fa-chevron-down"
              : "fas fa-chevron-down expand-task-opened"
          }
        ></i>
      </button>
      <div className="task-opened">
        <div className="task-description">
          <p>{props.taskDescription}</p>
        </div>
        <div className="task-options">
          <i className="fas fa-file-download"></i>
          <i className="fas fa-file-upload"></i>
        </div>
        <p className={props.taskStatus ? "task-done" : "task-failed"}>
          {props.taskStatus}
        </p>
      </div>
    </div>
  );
}

export default Task;
