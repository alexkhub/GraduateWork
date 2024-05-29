function JournalsItem(props) {
  function getJournal() {
    localStorage.setItem("journalId", 4);
    window.location.href = "/journal";
  }
  
  return (
    <>
      <div className="journal" onClick={getJournal}>
        <p className="journal-group">{props.groupName}</p>
      </div>
    </>
  );
}

export default JournalsItem;
