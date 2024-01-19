import SliderItem from './slider-item/slider-item';
import './failed-tasks.css';

function FailedTasks() {
    return (
        <div className="failed-tasks">
            <p className="failed-tasks-title">Просроченные задания</p>
            <i className="fas fa-chevron-left"></i>
            <div className="failed-tasks-slider-line">

                <SliderItem
                    teacherName='Гагиева В.Л.'
                    subjectName='ПМ 01'
                    taskDate='28.12.2023'
                    taskStatus='Просрочено'
                />

                <SliderItem
                    teacherName='Гагиева В.Л.'
                    subjectName='ПМ 01'
                    taskDate='28.12.2023'
                    taskStatus='Просрочено'
                />

                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
            </div>
            <i className="fas fa-chevron-right"></i>
        </div>
    )
}

export default FailedTasks;