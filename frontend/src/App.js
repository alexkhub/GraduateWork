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

function App() {
  const [userData, setUser] = useState("");
  let user = "alexkhub";

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api-student_performance/profile/${user}/`)
      .then((data) => setUser(data.data.profile));
  }, [user]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <Profile
                username={userData.username}
                group={userData.group}
                name={`${userData.first_name} ${userData.last_name}`}
              />
            }
          />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/account-verified" element={<AccountVerified />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teachers-schedule" element={<TeachersSchedule />} />
          <Route path="/ratings" element={<Ratings username={userData.username}/>} />
          <Route path="/replacements" element={<Replacements />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
