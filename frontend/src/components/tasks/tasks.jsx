import "./Tasks.css";
import Task from "./Task/Task";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Tasks() {
  const [tasksData, setTasks] = useState("");
  const tasks = [];

  let group = "4-1is";
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api-student_work/group_quest/${group}/`)
      .then((data) => setTasks(data.data.group_quests));
  }, [group]);

  for (let i = 0; i < tasksData.length; i++) {
    tasks.push(
      <Task
        teacherName={tasksData[i].lecturer.user
          .replace("-", " ")
          .replace("_", " ")}
        subjectName={tasksData[i].subject}
        taskName={tasksData[i].quest_name}
        taskDate={tasksData[i].date_added}
        taskDescription={tasksData[i].description}
        taskStatus=""
        key={i}
      />
    );
  }

  return <div className="tasks-content">{tasks}</div>;
}

export default Tasks;
