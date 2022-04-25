import React from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import TextField from "@mui/material/TextField";

const DateField = (props: any) => {
  const {
    control,
    label,
    name,
    defaultValue = new Date(),
    variant = "standard",
    rules,
    error = false,
    helperText,
    inputFormat = "dd/MM/yyyy",
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        rules={rules}
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { ref, value, ...fieldProps } }) => (
          <DatePicker
            {...fieldProps}
            inputFormat={inputFormat}
            label={label}
            value={value}
            onChange={(e) => fieldProps.onChange(e)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant={variant}
                error={error}
                helperText={helperText}
                fullWidth
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateField;
