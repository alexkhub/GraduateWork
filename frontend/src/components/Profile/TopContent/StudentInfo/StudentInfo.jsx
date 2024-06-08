import StudentSettings from "./StudentSettings/StudentSettings";

function StudentInfo(props) {
  return (
    <div className="student-info">
      <StudentSettings userSlug={props.userSlug} />
      <div className="student-characteristics">
        <p className="characteristics-item student-name">{props.name}</p>
        <p className="characteristics-item student-username">
          {props.userName}
        </p>
        <div>
          <p className="characteristics-item student-group">{props.groupName}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
