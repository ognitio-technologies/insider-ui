import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

const SelectFields = (props: any) => {
  const { id, label, menu, helperText, inputProps, ...other } = props;

  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl
      variant="standard"
      sx={{ my: 1, minWidth: 120, py: 1 }}
      fullWidth
    >
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={label}
        id={id}
        value={value}
        onChange={handleChange}
        label={label}
        {...other}
        inputProps={inputProps}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menu.map((item: any, index: number) => (
          <MenuItem value={item.id} key={index}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default SelectFields;
