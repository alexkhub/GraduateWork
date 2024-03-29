import ProfileTopContent from './TopContent/TopContent';
import LastTasks from './LastTasks/LastTasks';
// import AddFrom from './AddForm/AddForm';

function Profile() {
    return (
        <div className='profile-content'>
            <ProfileTopContent />
            <LastTasks />
            {/* <AddFrom />  */}
        </div>
    )
}

export default Profile;