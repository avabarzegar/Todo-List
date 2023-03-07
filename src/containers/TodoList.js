import React, { useReducer, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import AddTask from "../components/list/AddTask";
import TaskList from "../components/list/TaskList";
import saveDataLocalStorage from "../hooks/SaveLocal";

let nextId = 0;
// const initialTasks = [
//   { id: 0, text: "Visit Kafka Museum", done: true },
//   { id: 1, text: "Watch a puppet show", done: false },
//   { id: 2, text: "Lennon Wall pic", done: false },
// ];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      const addedData = {
        id: action.id,
        text: action.text,
        done: false,
      };
      // window.localStorage.setItem(action.id, action.text);
      if (tasks) {
        return [...tasks, addedData];
      } else return addedData;
    }
    case "changed": {
      return tasks?.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const [localTasks, setLocalTasks] = useState([]);

  useEffect(() => {
    let updatedTasks = [];

    tasks.map((task) => {
      updatedTasks.push(task);
    });

    saveDataLocalStorage("tasks", JSON.stringify(updatedTasks));

    setLocalTasks(JSON.parse(localStorage.getItem("tasks")));

    console.log(localStorage);
  }, [tasks]);

  console.log(localTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <Layout>
      <h1>Todo List</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        localTasks={localTasks}
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </Layout>
  );
}
export default TaskApp;
