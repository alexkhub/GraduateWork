import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

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
  const [userGroupData, setUserGroupData] = useState("");
  let groupSlug = userGroupData.replace("ИС", "is");
  let userSlug = "";
  localStorage.getItem("JWT")
    ? (userSlug = "alexkhub")
    : // ? (userSlug = jwtDecode(localStorage.getItem("JWT")).user_slug)
      (userSlug = null);

  // Get auth status
  const [isAuthorized, setAuthorized] = useState(false);
  function authCheck() {
    localStorage.getItem("JWT") ? setAuthorized(true) : setAuthorized(false);
  }

  useEffect(() => {
    authCheck();
  }, []);

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
                  userSlug={userSlug}
                  userGroupData={userGroupData}
                  setUserGroupData={setUserGroupData}
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
            element={
              isAuthorized ? (
                <Schedule groupSlug={groupSlug} />
              ) : (
                <Unauthorized />
              )
            }
          />
          <Route
            path="/teachers-schedule"
            element={isAuthorized ? <TeachersSchedule /> : <Unauthorized />}
          />
          <Route
            path="/ratings"
            element={
              isAuthorized ? <Ratings userSlug={userSlug} /> : <Unauthorized />
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
