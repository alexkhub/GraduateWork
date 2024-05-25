import Student from "./Student/Student";
import PairNumber from "./PairNumber/PairNumber";

function List1(props) {
  const lessonsCopy = Object.assign([], props.journalData.lessons);

  const students = [];
  for (let i = 0; i < props.group.length; i++) {
    students.push(
      <Student
        studentName={props.group[i].full_name}
        journalData={props.journalData}
        key={props.group[i].id}
      />
    );
  }

  const pairNumbers = [];
  for (let i = 0; i < lessonsCopy.length; i++) {
    pairNumbers.push(<PairNumber key={i} pairNumber={lessonsCopy[i].id} />);
  }

  return (
    <div className="list1-container">
      <table>
        <tbody>
          <tr className="pairs">
            <td className="columns-names">
              <p>
                <span id="columns-names-students">Обучающиеся</span>{" "}
                <span id="columns-names-days">Пара</span>
              </p>
            </td>
            {pairNumbers}
          </tr>
          {students}
        </tbody>
      </table>
    </div>
  );
}

export default List1;
