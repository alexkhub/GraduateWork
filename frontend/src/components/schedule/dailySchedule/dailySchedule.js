import Pair from "../pair/pair";
import DoublePair from "../doublePair/doublePair";


function DailySchedule(props) {
    return (
        <>
            <tr>
                <td></td>
                <td className="day">{props.day}</td>
                <td></td>
            </tr>

            <Pair
                pairNumber='1'
                subjectName={props.firstSubjectName}
                teacherName={props.firstTeacherName}
                audience={props.firstAudience}
                time="9:00 - 10:30"
            />

            <Pair
                pairNumber='2'
                subjectName={props.secondSubjectName}
                teacherName={props.secondTeacherName}
                audience={props.secondAudience}
                time="10:40 - 12:10"
            />

            <Pair
                pairNumber='3'
                subjectName={props.thirstSubjectName}
                teacherName={props.thirstTeacherName}
                audience={props.thirstAudience}
                time="12:50 - 14:20"
            />

            <Pair
                pairNumber='4'
                subjectName={props.fourthSubjectName}
                teacherName={props.fourthTeacherName}
                audience={props.fourthAudience}
                time="14:30 - 16:00"
            />
        </>
    )
}

export default DailySchedule;