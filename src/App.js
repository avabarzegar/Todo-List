import "./App.css";
import React from "react";
import Calendar from "./components/calendar/Calendar";
import TodoList from "./containers/TodoList";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pages/:dateString" element={<TodoList />} />
        <Route path="/" element={<Calendar year={2023} month={3} />} />
      </Routes>
    </Router>
  );
}
export default App;
