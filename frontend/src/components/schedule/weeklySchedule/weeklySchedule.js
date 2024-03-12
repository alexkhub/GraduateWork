import DailySchedule from '../dailySchedule/dailySchedule';
// import DoublePair from "../doublePair/doublePair";

function WeeklySchedule(props) {
    return (
        <>
            <DailySchedule
                day='Понедельник'
            />
            <DailySchedule
                day='Вторник'
            />
        </>
    )
}

export default WeeklySchedule;