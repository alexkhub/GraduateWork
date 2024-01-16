import './tasks.css'

function Tasks () {
    return (
        <div className='tasks-content'>
        
        <div className="task task-close">
            <p className="teacher-name">Гагиева В. Л.</p>
            <p className="subject">ПМ 01</p>
            <p className="task-name">Название задания</p>
            {/* Дата, когда задание загружено */}
            <p className="task-date">28.12.2023</p>
            <div className="expand">
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className="task-opened">
                <div className="task-description">
                    <p>Описание и анализ основных принципов устройства и организации веб-сервисов. Создание демонстрационного клиент-серверного приложения.</p>
                </div>
                <div className="task-options">
                    <i className="fas fa-file-download"></i>
                    <i className="fas fa-file-upload"></i>
                </div>
                <p className="task-done">Сдано</p>
            </div>

        </div>
        <div className="task task-close">
            <p className="teacher-name">Караев Ч. А.</p>
            <p className="subject">ПМ 04</p>
            <p className="task-name">Название задания</p>
            {/* Дата, когда задание загружено */}
            <p className="task-date">29.12.2023</p>
            <div className="expand">
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className="task-opened">
                <div className="task-description">
                    <p>Сделать серию из 12 побед в шахматах и создать нейросеть. Написать и вовремя сдать отчеты. И чтобы мемы были.</p>
                </div>
                <div className="task-options">
                    <i className="fas fa-file-download"></i>
                    <i className="fas fa-file-upload"></i>
                </div>
                <p className="tasks-task-failed">Просрочено</p>
            </div>
        </div>

        <div className="task task-close">
            <p className="teacher-name">Зембатова М. А.</p>
            <p className="subject">ПМ 02</p>
            <p className="task-name">Название задания</p>
            {/* Дата, когда задание загружено */}
            <p className="task-date">01.01.2024 </p>
            <div className="expand">
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className="task-opened">
                <div className="task-description">
                    <p>В сетевой папке открыть практические и сделать до 12 числа</p>
                </div>
                <div className="task-options">
                    <i className="fas fa-file-download"></i>
                    <i className="fas fa-file-upload"></i>
                </div>
                <p className="tasks-task-failed">Просрочено</p>
            </div>
        </div>

    </div>
    )

}

export default Tasks;