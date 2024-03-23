import './Tasks.css'
import Task from './Task/Task';

function Tasks() {

    return (
        <div className='tasks-content'>
            <Task
            teacherName = 'Гагиева В.Л.'
            subjectName = 'ПМ 01'
            taskName = 'Название задания'
            taskDate = '28.12.2023'
            taskDescription = 'Описание и анализ основных принципов устройства и организации веб-сервисов. Создание демонстрационного клиент-серверного приложения.'
            taskStatus = 'Сдано'
            />
            <Task
            teacherName = 'Караев Ч.А.'
            subjectName = 'ПМ 04'
            taskName = 'Название задания'
            taskDate = '29.12.2023'
            taskDescription = 'Сделать серию из 12 побед в шахматах и создать нейросеть. Написать и вовремя сдать отчеты. И чтобы мемы были.'
            taskStatus = 'Просрочено'
            />
            <Task
            teacherName = 'Зембатова М.А.'
            subjectName = 'ПМ 02'
            taskName = 'Название задания'
            taskDate = '01.01.2024'
            taskDescription = 'В сетевой папке открыть практические и сделать до 12 числа.'
            taskStatus = 'Просрочено'
            />
        </div>
    )

}

export default Tasks;