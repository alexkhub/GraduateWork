import '../tasks.css';
function Task(props) {

    function openTaskHandler() {
        console.log('aa')
    }

    return (
        <div className="task task-close">
            <p className="teacher-name">{props.teacherName}</p>
            <p className="subject">{props.subjectName}</p>
            <p className="task-name">{props.taskName}</p>
            {/* Дата, когда задание загружено */}
            <p className="task-date">{props.taskDate}</p>
            <button onClick={openTaskHandler} className="expand">
                <i className="fas fa-chevron-down"></i>
            </button>
            <div className="task-opened">
                <div className="task-description">
                    <p>{props.taskDescription}</p>
                </div>
                <div className="task-options">
                    <i className="fas fa-file-download"></i>
                    <i className="fas fa-file-upload"></i>
                </div>
                <p className="task-done">{props.taskStatus}</p>
            </div>

        </div>
    )
}

export default Task;