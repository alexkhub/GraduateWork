import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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
import Journals from "./components/Journals/Journals";
import Journal from "./components/Journals/Journal/Journal";

function App() {
  // Get is staff
  let isStaff = localStorage.getItem("isStaff");

  // Get user slug
  let userSlug = "";
  localStorage.getItem("JWT")
    ? (userSlug = jwtDecode(localStorage.getItem("JWT")).user_slug)
    : (userSlug = null);

  axios.defaults.headers.common["Authorization"] = `JWT ${localStorage.getItem(
    "JWT"
  )}`;

  // Get group slug
  const [userGroupData, setUserGroupData] = useState("");
  let groupSlug = localStorage.getItem("groupSlug");

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
        <Header isAuthorized={isAuthorized} isStaff={isStaff} />
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
                  groupName={JSON.parse(isStaff) ? "staff" : userGroupData.name}
                  isStaff={isStaff}
                />
              ) : (
                <Unauthorized />
              )
            }
          />
          <Route
            path="/tasks"
            element={
              isAuthorized ? <Tasks groupSlug={groupSlug} /> : <Unauthorized />
            }
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
            element={
              isAuthorized ? (
                <Replacements groupSlug={groupSlug} />
              ) : (
                <Unauthorized />
              )
            }
          />
          <Route
            path="/exams"
            element={
              isAuthorized ? <Exams groupSlug={groupSlug} /> : <Unauthorized />
            }
          />
          <Route
            path="/journals"
            element={isAuthorized ? <Journals /> : <Unauthorized />}
          />
          <Route
            path='/journal'
            element={isAuthorized ? <Journal /> : <Unauthorized />}
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="/401" element={<Unauthorized />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
