import DailySchedule from './dailySchedule/dailySchedule';
import WeeklySchedule from './weeklySchedule/weeklySchedule';
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
                        />

                    </tbody>
                </table>
            </div>

            <div className="weekly-schedule schedule-content">
                <p>Расписание на неделю</p>

                <table className="daily-schedule">
                    <tbody>
                        <WeeklySchedule
                        />
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Schedule;