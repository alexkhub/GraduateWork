import axios from "axios";
import { useEffect, useState } from "react";
import ProfileTopContent from "./TopContent/ProfileTopContent";
import LastTasks from "./LastTasks/LastTasks";
// import AddFrom from './AddForm/AddForm';

function Profile(props) {
  const [userData, setUserData] = useState("");
  
  axios.defaults.headers.common["Authorization"] = `JWT ${localStorage.getItem(
    "JWT"
  )}`;

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api-student_performance/profile/${props.userSlug}/`
      )
      .then((data) => {
        setUserData(data.data.profile)
        props.setUserGroupData(data.data.profile.group)
      });
  }, [props]);

  return (
    <div className="profile-content">
      <ProfileTopContent
        userSlug={props.userSlug}
        name={`${userData.first_name} ${userData.last_name}`}
        userName = {userData.username}
        userGroup={userData.group}
      />
      <LastTasks userSlug={props.userSlug} key="1" />
      {/* <AddFrom />  */}
    </div>
  );
}

export default Profile;
