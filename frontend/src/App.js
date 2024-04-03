import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Tasks from "./components/Tasks/Tasks";
import AccountVerified from "./components/AccountVerified/AccountVerified";
import Schedule from "./components/Schedule/Schedule";
import Ratings from "./components/Ratings/Ratings";
import NotFound from "./components/NotFound/NotFound";
import TeachersSchedule from "./components/TeachersSchedule/TeachersSchedule";
import Replacements from "./components/Replacements/Replacements";
import Exams from "./components/Exams/Exams";
import Unauthorized from "./components/Unauthorized/Unauthorized";

function App() {
  // Get data for profile
  const [userData, setUser] = useState("");
  // Get auth status
  const [isAuthorized, setAuthorized] = useState(false);
  function authCheck() {
    localStorage.getItem("JWT") ? setAuthorized(true) : setAuthorized(false);
  }

  let user = "alexkhub";
  const profileEndpoint = `http://localhost:8000/api-student_performance/profile/${user}/`;
  useEffect(() => {
    axios.get(profileEndpoint).then((data) => setUser(data.data.profile));

    authCheck();
  }, [user, profileEndpoint]);

  return (
    <div>
      <BrowserRouter>
        <Header isAuthorized={isAuthorized} />
        <Routes>
          <Route
            path="/login"
            element={<Login isAuthorized={isAuthorized} />}
          />
          <Route
            path="/profile"
            element={
              isAuthorized ? (
                <Profile
                  username={user}
                  group={userData.group}
                  name={`${userData.first_name} ${userData.last_name}`}
                />
              ) : (
                <Unauthorized />
              )
            }
          />
          <Route
            path="/tasks"
            element={isAuthorized ? <Tasks /> : <Unauthorized />}
          />
          <Route path="/account-verified" element={<AccountVerified />} />
          <Route
            path="/schedule"
            element={isAuthorized ? <Schedule /> : <Unauthorized />}
          />
          <Route
            path="/teachers-schedule"
            element={isAuthorized ? <TeachersSchedule /> : <Unauthorized />}
          />
          <Route
            path="/ratings"
            element={
              isAuthorized ? (
                <Ratings username={user} />
              ) : (
                <Unauthorized />
              )
            }
          />
          <Route
            path="/replacements"
            element={isAuthorized ? <Replacements /> : <Unauthorized />}
          />
          <Route
            path="/exams"
            element={isAuthorized ? <Exams /> : <Unauthorized />}
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="/401" element={<Unauthorized />} />
          <Route path="/" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
