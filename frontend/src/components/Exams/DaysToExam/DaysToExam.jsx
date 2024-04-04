function DaysToExam(props) {
  const today = Date.parse(new Date());
  const nextExam = Date.parse(props.upcomingExam.date);
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const daysBeforeExam = Math.round((nextExam - today) / millisecondsInDay);

  return <span>{daysBeforeExam} суток</span>;
}

export default DaysToExam;
