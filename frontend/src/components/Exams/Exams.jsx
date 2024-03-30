import React, { useState, useEffect } from "react";
import axios from "axios";
import Exam from "./Exam/Exam";

function Exams() {
  const [examsData, setExamsData] = useState("");
  const exams = [];

  let group = "4-1is";
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api-timetable/exam/${group}/`)
      .then((data) => setExamsData(data.data.exams));
  }, [group]);

  for (let i = 0; i < examsData.length; i++) {
    examsData[i].lecturer.user = examsData[i].lecturer.user
      .replace("_", " ")
      .replace("-", " ");

    exams.push(
      <Exam
        key={examsData[i].id}
        subject={examsData[i].subject}
        lecturer={examsData[i].lecturer.user}
        date={examsData[i].date}
        startTime={examsData[i].start_time}
        endTime={examsData[i].end_time}
        classroom={examsData[i].classroom}
      />
    );
  }
  return (
    <>
      <div className="exams-content">
          <p className="container-title">Следующий экзамен</p>
        <div className="next-exam-container">
          {exams}
        </div>
          <p className="container-title">Все экзамены</p>
        <div className="all-exams-container">
            {exams}
            {exams}
            {exams}
            {exams}
            {exams}
            {exams}
        </div>
      </div>
    </>
  );
}

export default Exams;
