import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Tasks from './components/Tasks/Tasks';
import AccountVerified from "./components/AccountVerified/AccountVerified";
import Schedule from "./components/Schedule/Schedule";
import Ratings from "./components/Ratings/Ratings";
import NotFound from "./components/NotFound/NotFound";
import TeachersSchedule from "./components/TeachersSchedule/TeachersSchedule";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/account-verified" element={<AccountVerified />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/teachers-schedule" element={<TeachersSchedule />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;