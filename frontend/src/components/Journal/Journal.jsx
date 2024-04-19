import React, { useState } from "react";
import List1 from "./List1/List1";
import List2 from "./List2/List2";

function Journal() {
  const [isOpen, setOpen] = useState(false);
  function openExtendedJournal() {
    setOpen(!isOpen);
  }

  return (
    <div className="journal-content">
      <div className="journal-title">
        <h2>Математика</h2>
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
      {isOpen ? <List2 /> : <List1 isOpen={isOpen} setOpen={setOpen} />}
    </div>
  );
}

export default Journal;
