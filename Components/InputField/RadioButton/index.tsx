import React from "react";
import { Controller } from "react-hook-form";

import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";

const RadioButton = (props: any) => {
  const { data, name, label, rules, control, row } = props;

  //   const { control } = useForm({ defaultValues: { name: 0 } });

  return (
    <FormControl>
      <FormLabel id={name}>{label}</FormLabel>
      <Controller
        rules={rules}
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <RadioGroup {...field} row={row}>
              {data.map((item: any, index: number) => (
                <FormControlLabel
                  value={item.value}
                  control={<Radio />}
                  label={item.buttonLabel}
                  key={index}
                />
              ))}
            </RadioGroup>
          );
        }}
      />
    </FormControl>
  );
};

export default RadioButton;
