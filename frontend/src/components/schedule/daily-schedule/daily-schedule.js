import Pair from "../daily-schedule/pair/pair";
import DoublePair from "./doublePair/doublePair";


function DailySchedule() {
    return (
        <div className="schedule-content">
            <p>Расписание на сегодня</p>
            <table className="daily-schedule">
                <tbody>

                    <tr>
                        <td></td>
                        <td className="day">Понедельник</td>
                        <td></td>
                    </tr>

                    <Pair
                        pairNumber='1'
                        subjectName='Иностранный язык в профессиональной деятельности'
                        teacherName='Бигаева Э.С.'
                        audience='36'
                        time='9:00 - 13:30'
                    />

                    <DoublePair
                          pairNumber='2'

                          subjectName='Технология разработки программного обеспечения'
                          teacherName='Зембатова М.А.'
                          audience='27'
                          
                          secondSubjectName = 'Разработка мобильных приложений'
                          secondTeacherName = 'Зангиева С.В.'
                          secondAudience = '23'

                          time='10:40 - 12:50'
                    />

                    <Pair
                        pairNumber='3'
                        subjectName='Разработка и защита баз данных'
                        teacherName='Гагиева В.Л.'
                        audience='64'
                        time='12:50: - 14:20'
                    />

                    <Pair
                        pairNumber='4'
                        subjectName='Питон'
                        teacherName='Караев Ч.А.'
                        audience='70'
                        time='14:30: - 16:00'
                    />
                    
                </tbody>
            </table>
        </div>
    )
}

export default DailySchedule;