import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useNavigate } from "react-router-dom";

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(new Date());
  const navigate = useNavigate();

  const daysChangeHandler = (value) => {
    const date = `${value.$y}-${value.$M}-${value.$D}`;
    setValue(value);
    navigate(`/TodoList/${date}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={value}
        onChange={(newValue) => daysChangeHandler(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
