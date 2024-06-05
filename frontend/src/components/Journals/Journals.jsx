import { useEffect, useState } from "react";
import JournalsItem from "./JournalsItem/JournalsItem";
import axios from "axios";

function Journals() {
  const [journals, setJournals] = useState([]);
  const journalItems = [];

  useEffect(() => {
    axios.get("http://localhost:8000/api-timetable/journals/").then((data) => {
      setJournals(data.data);
    });
  }, []);

  for (let i = 0; i < journals.length; i++) {
    journalItems.push(
      <JournalsItem groupName={journals[i].group} subjectName = {journals[i].subject} journalId={journals[i].id} />
    );
  }

  localStorage.removeItem("journalId");
  return (
    <div className="journals">
      <p className="journals-title">Выберите журнал:</p>
      <div className="journals-container">{journalItems}</div>
    </div>
  );
}

export default Journals;
