import { useState } from "react";
import Checkbox from "../UI/Checkbox";
import EditBtn from "../UI/EditBtn";
import DeleteBtn from "../UI/DeleteBtn";
import SaveBtn from "../UI/SaveBtn";
import { Grid, TextField } from "@mui/material";

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <Grid container>
        <Grid item>
          <TextField
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value,
              });
            }}
            id="outlined-multiline-flexible"
            multiline
            maxRows={4}
          />
        </Grid>
        <Grid item>
          <SaveBtn onClick={() => setIsEditing(false)} />
        </Grid>
      </Grid>
    );
  } else {
    taskContent = (
      <Grid container>
        <Grid item>{task.text}</Grid>
        <Grid item>
          <EditBtn onClick={() => setIsEditing(true)} />
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container>
      <Grid item>
        <Checkbox
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
      </Grid>
      <Grid item>{taskContent}</Grid>
      <Grid item>
        <DeleteBtn onClick={() => onDelete(task.id)} />
      </Grid>
    </Grid>
  );
}

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <Grid container direction="column">
      {tasks.map((task) => (
        <Grid item key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </Grid>
      ))}
    </Grid>
  );
}
