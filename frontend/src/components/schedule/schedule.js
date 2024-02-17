import DailySchedule from './dailySchedule/dailySchedule';
import './schedule.css';

function Schedule() {
    fetch('http://127.0.0.1:8000/api-timetable/timetable/4-1is/')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
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
                <table className="daily-schedule">
                    <tbody>

                        <DailySchedule
                            day='Понедельник'

                            firstSubjectName='Иностранный язык в профессиональной деятельности'
                            firstTeacherName='Бигаева Э.С.'
                            firstAudience='36'

                            secondSubjectName='Технология разработки программного обеспечения'
                            secondTeacherName='Зембатова М.А.'
                            secondAudience='27'

                            thirstSubjectName='Разработка мобильных приложений'
                            thirstTeacherName='Зангиева С.В.'
                            thirstAudience='23'

                            fourthSubjectName='Питон'
                            fourthTeacherName='Караев Ч.А.'
                            fourthAudience='70'
                        />

                        <DailySchedule
                            day='Вторник'

                            firstSubjectName='Технология разработки и защиты баз данных'
                            firstTeacherName='Гагиева В.Л.'
                            firstAudience='70'

                            secondSubjectName='Сертификация'
                            secondTeacherName='Зангиева С.В.'
                            secondAudience='23'

                            thirstSubjectName='Сертификация и стандартизация'
                            thirstTeacherName='Канатов А.О.'
                            thirstAudience='22'

                            fourthSubjectName='Экономика отрасли'
                            fourthTeacherName='Нежид Ю.С.'
                            fourthAudience='42'
                        />

                        <DailySchedule
                            day='Среда'

                            firstSubjectName='Математическое моделирование'
                            firstTeacherName='Бязров А.Р.'
                            firstAudience='26'

                            secondSubjectName='Инструментальные средства разработки программного обеспечения'
                            secondTeacherName='Зангиева Д.Д.'
                            secondAudience='25'

                            thirstSubjectName='Менеджмент в профессиональной деятельности'
                            thirstTeacherName='Елканова Д.А'
                            thirstAudience='42'

                            fourthSubjectName='Управление и автоматизация баз данных'
                            fourthTeacherName='Цалаев С.А.'
                            fourthAudience='26'
                        />

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Schedule;