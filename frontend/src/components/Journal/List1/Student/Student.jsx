import Score from "./Score/Score";

function Student(props) {
  const scores = [];
  const studentScores = [];
  const students = Object.assign([], props.journalData.lessons);

  for (let i = 0; i < students.length; i++) {
    scores.push(students[i].student_scores);
    for (let j = 0; j < scores[i].length; j++) {
      studentScores.push(
        <Score
        cause={scores[i][j].cause}
        score={scores[i][j].points}
        key={scores[i][j].id}
        />
      );
    }
  }

  return (
    <>
      <tr className="student-scores">
        <td className="student-name">
          <p>{props.studentName}</p>
        </td>
        {studentScores}
      </tr>
    </>
  );
}

export default Student;
