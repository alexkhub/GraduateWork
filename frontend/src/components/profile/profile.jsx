import './Profile.css';
import ProfileTopContent from './TopContent/TopContent';
import FailedTasks from './FailedTasks/FailedTasks';
import AddFrom from './AddForm/AddForm';

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