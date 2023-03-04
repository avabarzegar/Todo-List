import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';


export default function FloatingActionButtons(props) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab onClick={props.onDeleteTask}>
        <DeleteIcon />
      </Fab>
    </Box>
  );
}