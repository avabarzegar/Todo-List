import "./App.css";
import React from "react";
import Calendar from "./components/calendar/Calendar";
import TodoList from "./containers/TodoList";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/TodoList/:day" element={<TodoList />} />
        <Route path="/" element={<Calendar />} />
      </Routes>
    </Router>
  );
}
export default App;
