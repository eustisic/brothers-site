import React from "react";
import logo from "./logo.svg";
import "./assets/css/App.css";
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./assets/css/cal.css";
import Calendar from "./components/Calendar/Calendar";
import Landing from "./components/Landing/Landing"

function App() {
  return (
    <div className="App">
      <Landing />
      <Calendar />
    </div>
  );
}

export default App;
