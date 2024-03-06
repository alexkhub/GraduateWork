import DailySchedule from './dailySchedule/dailySchedule';
import './schedule.css';

function Schedule() {
    return (
        <>
            <div className="daily-schedule schedule-content">
                <p>Расписание на сегодня</p>
                <table className="daily-schedule">
                    <tbody>

                        <DailySchedule
                            day='Понедельник'

                            firstPairNumber='1'
                            firstSubjectName='Иностранный язык в профессиональной деятельности'
                            firstTeacherName='Бигаева Э.С.'
                            firstAudience='36'
                            firstTime='9:00 - 10:30'

                            secondPairNumber='2'
                            secondSubjectName='Технология разработки программного обеспечения'
                            secondTeacherName='Зембатова М.А.'
                            secondAudience='27'
                            secondTime='10:40 - 12:10'

                            thirstPairNumber='3'
                            thirstSubjectName='Разработка мобильных приложений'
                            thirstTeacherName='Зангиева С.В.'
                            thirstAudience='23'
                            thirstTime='12:50 - 14:20'

                            fourthPairNumber='4'
                            fourthSubjectName='Питон'
                            fourthTeacherName='Караев Ч.А.'
                            fourthAudience='70'
                            fourthTime='14:20 - 16:00'
                        />

                    </tbody>
                </table>
            </div>

            <div className="weekly-schedule schedule-content">
                <p>Расписание на неделю</p>
                
            </div>
        </>
    )
}

export default Schedule;