import Lesson from "./Lesson/Lesson";

function List2(props) {
  const journalData = props.journalData.lessons;
  const lessons = [];

  for (let i = 0; i < journalData.length; i++) {
    lessons.push(
      <Lesson
        pairNumber={journalData[i].id}
        date = {journalData[i].date}
        pairType={journalData[i].type_of_lesson}
        theme={journalData[i].lesson_topic}
        homework={journalData[i].quest}
        key={journalData[i].id}
      />
    );
  }
  return (
    <div className="list2-container">
      <table>
        <tbody>
          <tr className="days">
            <td className="columns-names">Номер пары</td>
            <td>Дата занятия</td>
            <td>Тип занятия</td>
            <td>Тема</td>
            <td>Д/З</td>
          </tr>
          {lessons}
        </tbody>
      </table>
    </div>
  );
}

export default List2;
