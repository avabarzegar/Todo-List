import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

export default function FloatingActionButtons(props) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab color="secondary" aria-label="edit" onClick={props.onChangeTask}>
        <EditIcon />
      </Fab>
    </Box>
  );
}
