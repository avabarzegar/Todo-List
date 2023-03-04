import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export default function FloatingActionButtons(props) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="small" aria-label="save" onClick={props.onClick}>
        <DoneAllIcon />
      </Fab>
    </Box>
  );
}
