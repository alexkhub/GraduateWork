import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Profile from "./components/profile/profile";
import Tasks from "./components/tasks/tasks";
import AccountVerified from "./components/accountVerified/accountVerified";
import Schedule from "./components/schedule/schedule";
import NotFound from "./components/notFound/notFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/account-verified" element={<AccountVerified />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;