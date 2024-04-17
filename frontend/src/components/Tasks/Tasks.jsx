import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task/Task";
import StudentTask from "./StudentTask/StudentTask";

function Tasks(props) {
  const [groupTasksData, setGroupTasks] = useState("");
  const [studentTasksData, setStudentTasks] = useState("");
  const groupTasks = [];
  const studentTasks = [];

  const studentQuestsEndpoint = `http://127.0.0.1:8000/api-student_work/group_quest/${props.groupSlug}/`;
  useEffect(() => {
    axios.get(studentQuestsEndpoint).then((data) => {
      setGroupTasks(data.data.group_quests);
      setStudentTasks(data.data.student_quests);
    });
  }, [studentQuestsEndpoint]);

  for (let i = 0; i < groupTasksData.length; i++) {
    groupTasks.push(
      <Task
        teacherName={groupTasksData[i].lecturer.user
          .replace("-", " ")
          .replace("_", " ")}
        subjectName={groupTasksData[i].subject}
        taskName={groupTasksData[i].quest_name}
        taskDate={groupTasksData[i].date_added}
        taskDescription={groupTasksData[i].description}
        taskStatus={false}
        key={i}
      />
    );
  }

  for (let i = 0; i < studentTasksData.length; i++) {
    studentTasks.push(
      <StudentTask
        studentTaskName={studentTasksData[i].quest}
        studentTaskStatus={studentTasksData[i].status}
        studentTaskDate={studentTasksData[i].date_added}
        studentTaskComment={studentTasksData[i].comment}
        key={i}
      />
    );
  }

  return (
    <>
      <h3 className="tasks-title">Задания группы</h3>
      <div className="group-tasks-content">{groupTasks}</div>
      <h3 className="tasks-title">Задания студента</h3>
      <div className="student-tasks-content">{studentTasks}</div>
    </>
  );
}

export default Tasks;
