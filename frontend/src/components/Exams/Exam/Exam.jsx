function Exam(props) {
  return (
    <div className="exams-item">
      <p>Дисциплина: {props.subject}</p>
      <p>{props.lecturer ? `Преподаватель:  ${props.lecturer}` : null}</p>
      <p>Дата: {props.date}</p>
      <p>Начало экзамена: {props.startTime}</p>
      <p>Конец экзамена: {props.endTime}</p>
      <p>Аудитория: {props.classroom}</p>
    </div>
  );
}

export default Exam;
