import React, { useState, useEffect } from "react";
import axios from "axios";
import Pair from "../Schedule/Pair/Pair";
import DailySchedule from "../Schedule/DailySchedule/DailySchedule";
function Replacements() {
  const [replacements, setReplacements] = useState("");
  const todayReplacements = [];
  const tomorrowReplacements = [];

  let group = "4-1is";
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api-timetable/timetable_changes/${group}/`)
      .then((data) => setReplacements(data.data.timetable_changes));
  }, [group]);

  for (let i = 0; i < replacements.length; i++) {
    replacements[i].lecturer.user = replacements[i].lecturer.user
      .replace("-", " ")
      .replace("_", " ");

    let pair = (
      <Pair
        pairNumber={replacements[i].lesson_number}
        subjectName={replacements[i].subject}
        teacherName={replacements[i].lecturer.user}
        audience={replacements[i].classroom}
        time={`${replacements[i].start_time} - ${replacements[i].end_time}`}
        key={replacements[i].id}
      />
    );

    const todayDate = new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

    if (replacements[i].date === todayDate) {
      todayReplacements.push(pair)
    } else {
        tomorrowReplacements.push(pair)
    }
  }


  return (
    <>
      <div className="daily-schedule schedule-content">
        <p>Расписание замен на сегодня</p>
        <table className="daily-schedule">
          <tbody>
            <DailySchedule day="Сегодня" pairs={todayReplacements} />
          </tbody>
        </table>
      </div>
      <div className="schedule-content">
        <p>Расписание замен на завтра</p>
        <table className="daily-schedule">
          <tbody>
            <DailySchedule day="Завтра" pairs={tomorrowReplacements} />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Replacements;
