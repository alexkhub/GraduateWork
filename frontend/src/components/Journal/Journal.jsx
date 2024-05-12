import React, { useState, useEffect } from "react";
import axios from "axios";

import List1 from "./List1/List1";
import List2 from "./List2/List2";

function Journal() {
  const [isOpen, setOpen] = useState(false);
  function openExtendedJournal() {
    setOpen(!isOpen);
  }

  const [journalData, setJournalData] = useState("");

  let id = 4;
  const endpoint = `http://localhost:8000/api-timetable/journal/${id}/`;
  useEffect(() => {
    axios.get(endpoint).then((data) => setJournalData(data.data.journal));
  }, [endpoint]);

  return (
    <div className="journal-content">
      <div className="journal-title">
        <h2>{journalData.subject}</h2>
        <div
          onClick={openExtendedJournal}
          className={`journal-title-arrow ${
            isOpen
              ? "journal-title-arrow__opened"
              : "journal-title-arrow__closed"
          }`}
        >
          <div className="journal-title-arrow-stick"></div>
          <div className="journal-title-arrow-stick"></div>
          <div className="journal-title-arrow-stick"></div>
        </div>
      </div>
      {isOpen ? (
        <List2 journalData={journalData} />
      ) : (
        <List1 journalData={journalData} isOpen={isOpen} setOpen={setOpen} />
      )}
    </div>
  );
}

export default Journal;
