import ProfileTopContent from "./TopContent/TopContent";
import LastTasks from "./LastTasks/LastTasks";
// import AddFrom from './AddForm/AddForm';

function Profile(props) {
  return (
    <div className="profile-content">
      <ProfileTopContent
        name={props.name}
        group={props.group}
        username={props.username}
      />
      <LastTasks />
      {/* <AddFrom />  */}
    </div>
  );
}

export default Profile;
