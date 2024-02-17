import './profile.css';
import ProfileTopContent from './top-content/top-content';
import FailedTasks from './failed-tasks/failed-tasks';
import AddFrom from './addForm/addForm';

function Profile() {
    return (
        <div className='profile-content'>
            <ProfileTopContent />
            <FailedTasks />
            {/* <AddFrom />  */}
        </div>
    )
}

export default Profile;