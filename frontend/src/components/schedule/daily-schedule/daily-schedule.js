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
                    <tr>
                        <td className="pair">1 пара</td>
                        <td className="subject">Иностранный язык в профессиональной деятельности<br/>Бигаева Э.С.</td>
                        <td className="audience">36 ауд.<br/>9:00 - 10:30</td>
                    </tr>
                    <tr>
                        <td rowspan="2" className="pair">2 пара</td>
                        <td className="subject">Иностранный язык в профессиональной деятельности<br/>Бигаева Э.С.</td>
                        <td className="audience">36 ауд.<br/>10:40 - 12:10</td>
                    </tr>
                    <tr>
                        <td className="subject">Сертификация<br/>Канатов А.О.</td>
                        <td className="audience">22 ауд.<br/>10:40 - 12:10</td>
                    </tr>
                    <tr>
                        <td className="pair">3 пара</td>
                        <td className="subject">Разработка и защита баз данных<br/>Гагиева В.Л.</td>
                        <td className="audience">64 ауд.<br/>12:50 - 14:20</td>
                    </tr>
                    <tr>
                        <td className="pair">4 пара</td>
                        <td className="subject">Питон Караев Ч.А.<br/></td>
                        <td className="audience">70 ауд.<br/>14:30 - 16:00</td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DailySchedule;