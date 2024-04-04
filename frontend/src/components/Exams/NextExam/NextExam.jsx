import DaysToExam from "../DaysToExam/DaysToExam";
import Exam from "../Exam/Exam";

function NextExam(props) {
  let upcomingExam = "";
  // Sort examsData for get upcomig exam
  for (let i = 0; i < props.examsData.length; i++) {
    upcomingExam = props.examsData.sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    )[0];
  }

  return (
    <>
      <p className="container-title">
        Следующий экзамен через <DaysToExam upcomingExam={upcomingExam} />
      </p>
      <div className="next-exam-container">
        <Exam
          key={0}
          subject={upcomingExam.subject}
          // lecturer={upcomingExam.lecturer.user} // this not work, idk why
          date={upcomingExam.date}
          startTime={upcomingExam.start_time}
          endTime={upcomingExam.end_time}
          classroom={upcomingExam.classroom}
        />
      </div>
    </>
  );
}

export default NextExam;
