import StudentSettings from "./StudentSettings/StudentSettings";

function StudentInfo(props) {
  return (
    <div className="student-info">
      <StudentSettings />
      <div className="student-characteristics">
        <p className="characteristics-item student-name">{props.name}</p>
        <p className="characteristics-item student-username">
          {props.userName}
        </p>
        <div>
          <p className="characteristics-item student-group">{props.userGroup}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
