// import * as React from "react";
// import Checkbox from "../UI/Checkbox";
// import EditBtn from "../UI/EditBtn";
// import DeleteBtn from "../UI/DeleteBtn";
// import { Grid } from "@mui/material";

// export default function TaskList(props) {
//   return props.tasks.map((task) => {
//     <Grid container>
//       <Grid item>
//         <Checkbox />
//       </Grid>
//       <Grid item>
//         <h4>{task}</h4>
//       </Grid>
//       <Grid item>
//         <EditBtn onChangeTask={props.onChangeTask} />
//       </Grid>
//       <Grid item>
//         <DeleteBtn onDeleteTask={props.onDeleteTask} />
//       </Grid>
//     </Grid>;
//   });
// }

import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
