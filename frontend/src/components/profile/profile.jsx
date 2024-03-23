import './profile.css';
import ProfileTopContent from './topContent/topContent';
import FailedTasks from './failedTasks/failedTasks';
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