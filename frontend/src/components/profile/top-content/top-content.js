import './top-content.css';
import TaskItem from './last-week-task-item/last-week-task-item';
import StudentInfo from './studentInfo/studentInfo';

function ProfileTopContent() {

    return (
            <div className="top-content">

               <StudentInfo/>
               
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