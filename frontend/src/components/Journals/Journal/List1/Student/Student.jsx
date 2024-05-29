import { useEffect, useState } from "react";
import Score from "./Score/Score";

function Student(props) {
  const lessonsCopy = Object.assign([], props.journalData.lessons);
  const [studentScores, setStudentScores] = useState();
  const scores = [];

  useEffect(() => {
    for (let i = 0; i < lessonsCopy.length; i++) {
      for (let j = 0; j < lessonsCopy[i].student_scores.length; j++) {
        if (props.studentName === lessonsCopy[i].student_scores[j].student) {
          scores.push(
            <Score
              scores={lessonsCopy[i].student_scores[j].points}
              cause={lessonsCopy[i].student_scores[j].cause}
            />
          );
        }
      }
      setStudentScores(scores);
    }
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
