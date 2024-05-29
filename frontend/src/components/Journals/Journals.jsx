import JournalsItem from "./JournalsItem/JournalsItem";

function Journals() {
  localStorage.removeItem("journalId");
  return (
    <div className="journals">
      <p className="journals-title">Выберите журнал:</p>
      <div className="journals-container">
        <JournalsItem groupName="4-1 ИС" />
      </div>
    </div>
  );
}

export default Journals;
