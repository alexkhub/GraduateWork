import ProfileTopContent from './TopContent/TopContent';
import LastTasks from './LastTasks/LastTasks';
// import AddFrom from './AddForm/AddForm';

function Profile(props) {
    return (
        <div className='profile-content'>
            <ProfileTopContent  studentName = {props.studentName} group = {props.group} birthdayDate = {props.birthdayDate} />
            <LastTasks />
            {/* <AddFrom />  */}
        </div>
    )
}

export default Profile;