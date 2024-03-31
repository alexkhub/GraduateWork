import TaskItem from "./LastWeekTaskItem/LastWeekTaskItem";
import StudentInfo from "./StudentInfo/StudentInfo.jsx";

function ProfileTopContent(props) {
  return (
    <div className="top-content">
      <StudentInfo
        name={props.name}
        group={props.group}
        username={props.username}
      />
      <div className="last-weeks-tasks">
        <p className="last-weeks-tasks-title">Последние задания</p>
        <div className="last-weeks-tasks-content">
          <TaskItem
            teacherName="Гагиева В.Л."
            subjectName="ПМ 01"
            taskStatus="Сдано"
          />
          <TaskItem
            teacherName="Гагиева В.Л."
            subjectName="ПМ 01"
            taskStatus="Просрочено"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileTopContent;
