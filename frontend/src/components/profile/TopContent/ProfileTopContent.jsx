import React, { useState, useEffect } from "react";
import axios from "axios";
import LastWeekTaskItem from "./LastWeekTaskItem/LastWeekTaskItem";
import StudentInfo from "./StudentInfo/StudentInfo.jsx";

function ProfileTopContent(props) {
  const [tasksData, setTasksData] = useState("");
  const lastWeekTasksItems = [];

  const userQuestsEndpoint = `http://localhost:8000/api-student_performance/profile/${props.userSlug}/`;
  useEffect(() => {
    axios
      .get(userQuestsEndpoint)
      .then((data) => setTasksData(data.data.user_quests));
  }, [userQuestsEndpoint]);

  for (let i = 0; i < tasksData.length; i++) {
    if (!tasksData[i].quest) {
      continue;
    }

    tasksData[i].quest.lecturer.user = tasksData[i].quest.lecturer.user
      .replace("-", " ")
      .replace("_", " ");

    lastWeekTasksItems.push(
      <LastWeekTaskItem
        teacherName={tasksData[i].quest.lecturer.user}
        subjectName={tasksData[i].quest.subject}
        taskStatus={tasksData[i].status}
        key={i}
      />
    );
  }

  return (
    <div className="top-content">
      <StudentInfo
        name={props.name}
        groupName={props.groupName}
        userName={props.userName}
      />
      <div className="last-weeks-tasks">
        <p className="last-weeks-tasks-title">Последние задания</p>
        <div className="last-weeks-tasks-content">{lastWeekTasksItems}</div>
      </div>
    </div>
  );
}

export default ProfileTopContent;
