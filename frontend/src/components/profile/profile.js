import './profile.css';
import ProfileTopContent from './top-content/top-content';
import FailedTasks from './failed-tasks/failed-tasks';

function Profile() {
    return (
        <div className='profile-content'>
            <ProfileTopContent />
            <FailedTasks />
        </div>
    )
}

export default Profile;