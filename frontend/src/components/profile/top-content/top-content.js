import './top-content.css';
import TaskItem from './last-week-task-item/last-week-task-item';

function ProfileTopContent() {
    return (
            <div className="top-content">
                <div className="student-info">
                    <div className="student-characteristics">
                        <p className="characteristics-item student-name">Хадиков Георгий Сосланович</p>
                        <p className="characteristics-item student-birthday-date">28.03.2004</p>
                        <div>
                            <p className="characteristics-item student-group">3-ИС</p>
                        </div>
                    </div>
                </div>
                <div className="last-weeks-tasks">
                    <p className="last-weeks-tasks-title">Последние задания</p>
                    <div className="last-weeks-tasks-content">
                        
                        <TaskItem 
                            teacherName = 'Гагиева В.Л.'
                            subjectName = 'ПМ 01'
                            taskStatus = 'Сдано'
                        />
                        <TaskItem 
                            teacherName = 'Гагиева В.Л.'
                            subjectName = 'ПМ 01'
                            taskStatus = 'Просрочено'
                        />
        
                    </div>
                </div>
            </div>
    )
}

export default ProfileTopContent;