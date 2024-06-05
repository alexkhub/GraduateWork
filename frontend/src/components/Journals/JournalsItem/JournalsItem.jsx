function JournalsItem(props) {
  function getJournal() {
    localStorage.setItem("journalId", props.journalId);
    window.location.href = "/journal";
  }
  
  return (
    <>
      <div className="journal" onClick={getJournal}>
        <p className="journal-group">{props.groupName}</p>
        <p className="journal-subject">{props.subjectName}</p>
      </div>
    </>
  );
}

export default JournalsItem;
