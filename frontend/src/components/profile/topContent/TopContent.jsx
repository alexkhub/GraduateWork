import React, { useState, useEffect } from "react";
import axios from "axios";
import LastWeekTaskItem from "./LastWeekTaskItem/LastWeekTaskItem";
import StudentInfo from "./StudentInfo/StudentInfo.jsx";

function ProfileTopContent(props) {
  const [tasksData, setTasksData] = useState("");
  const lastWeekTasksItems = [];

  let user = props.username;
  useEffect(() => {
    axios.get(`http://localhost:8000/api-student_performance/profile/${user}/`)
    .then (data => setTasksData(data.data.user_quests))
  }, [user]);

  for (let i = 0; i < tasksData.length; i++) {
    lastWeekTasksItems.push(
      <LastWeekTaskItem
            teacherName='Преподаватель'
            subjectName='Предмет'
            taskStatus={tasksData[i].status}
          />
    )
  }

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
          {lastWeekTasksItems}
        </div>
      </div>
    </div>
  );
}

export default ProfileTopContent;
