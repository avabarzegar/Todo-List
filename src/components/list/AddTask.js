import { useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import AddTaskBtn from "../UI/AddTaskBtn";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container>
          <Grid item>
            <TextField
              placeholder="Add task"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
            />
          </Grid>
          <Grid item>
            <AddTaskBtn
              onAddTask={() => {
                setText("");
                onAddTask(text);
              }}
            />
          </Grid>
        </Grid>
      </Box>
  );
}
