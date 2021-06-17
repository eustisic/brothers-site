import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css"
import Calendar from "./components/Calendar";
import Landing from "./components/Landing"

function App() {
  return (
    <div className="App">
      <Landing />
      <Calendar />
    </div>
  );
}

export default App;
