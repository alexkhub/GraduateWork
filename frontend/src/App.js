import React from "react";
import Header from './components/header/header';
import Login from "./components/login/login";

function App() {
  return (
    <div>
      <Header
        pageTitle = "Electron"
      />
      <Login />
    </div>
  )
}

export default App;