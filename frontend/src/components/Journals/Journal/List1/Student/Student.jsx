import { useEffect, useState } from "react";
import Score from "./Score/Score";

function Student(props) {
  const lessonsCopy = Object.assign([], props.journalData.lessons);
  const [studentScores, setStudentScores] = useState();

  useEffect(() => {
    const scores = [];
    lessonsCopy.forEach((lesson, i) => {
      let studentFound = false;
      lesson.student_scores.forEach((score, j) => {
        if (props.studentName === score.student) {
          scores.push(
            <Score
              key={`${i}-${j}`}
              scores={score.points}
              cause={score.cause}
            />
          );
          studentFound = true;
        }
      });
      if (!studentFound) {
        scores.push(<Score key={`${i}-no-student`} scores={""} />);
      }
    });
    setStudentScores(scores);
    // eslint-disable-next-line
  }, []);

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
