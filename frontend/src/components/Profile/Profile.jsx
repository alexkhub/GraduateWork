import axios from "axios";
import { useEffect, useState } from "react";
import ProfileTopContent from "./TopContent/ProfileTopContent";
import LastTasks from "./LastTasks/LastTasks";
import AddFrom from "./AddForm/AddForm";

function Profile(props) {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api-student_performance/profile/${props.userSlug}/`
      )
      .then((data) => {
        setUserData(data.data.profile);
        props.setUserGroupData(data.data.profile.group);
        localStorage.setItem("isStaff", data.data.profile.is_staff);

        // if isStaff === true -> groupSlug = staff
        localStorage.setItem(
          "groupSlug",
          localStorage.getItem("isStaff")
            ? "staff"
            : data.data.profile.group.slug
        );
      });
    // eslint-disable-next-line
  }, []);


  return (
    <div className="profile-content">
      <ProfileTopContent
        userSlug={props.userSlug}
        name={`${userData.first_name} ${userData.last_name}`}
        userName={userData.username}
        groupName={props.groupName}
      />
      {JSON.parse(props.isStaff) ? 
        <AddFrom />
        : 
        null
      }
    </div>
  );
}

export default Profile;
