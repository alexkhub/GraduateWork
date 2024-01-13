import { Link } from 'react-router-dom';
import './top-content.css';

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
                        <Link to="/" className="last-weeks-tasks-item">
                            <p className="last-weeks-tasks-item__teacher">Гагиева В. Л.</p>
                            <div>
                                <p className="last-weeks-tasks-item__subject">ПМ 01</p>
                                <p className="last-weeks-tasks-item__status task-done">Сдано</p>
                            </div>
                        </Link>
                        <Link to="/" className="last-weeks-tasks-item">
                            <p className="last-weeks-tasks-item__teacher">Гагиева В. Л.</p>
                            <div>
                                <p className="last-weeks-tasks-item__subject">ПМ 01</p>
                                <p className="last-weeks-tasks-item__status task-failed">Просрочено</p>
                            </div>
                        </Link>
                        <Link to="/" className="last-weeks-tasks-item"></Link>
                        <Link to="/" className="last-weeks-tasks-item"></Link>
                        <Link to="/" className="last-weeks-tasks-item"></Link>
                        <Link to="/" className="last-weeks-tasks-item"></Link>
                    </div>
                </div>
            </div>
    )
}

export default ProfileTopContent;