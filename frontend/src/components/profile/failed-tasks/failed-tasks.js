import { Link } from 'react-router-dom';
import './failed-tasks.css';

function FailedTasks() {
    return (
        <div className="failed-tasks">
            <p className="failed-tasks-title">Просроченные задания</p>
            <i className="fas fa-chevron-left"></i>
            <div className="failed-tasks-slider-line">
                <div className="failed-tasks-item">
                    <div>
                        <p>Гагиева В.Л.</p>
                        <p>ПМ 01</p>
                    </div>
                    <p className="task-data">28.12.2023</p>
                    <p className="task-failed">Просрочено</p>
                    <Link to="/">Посмотреть</Link>
                </div>
                <div className="failed-tasks-item">
                    <div>
                        <p>Гагиева В.Л.</p>
                        <p>МДК 04.01</p>
                    </div>
                    <p className="task-data">28.12.2023</p>
                    <p className="task-failed">Просрочено</p>
                    <Link to="/">Посмотреть</Link>
                </div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
                <div className="failed-tasks-item"></div>
            </div>
            <i className="fas fa-chevron-right"></i>
        </div>
    )
}

export default FailedTasks;