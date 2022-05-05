import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Grid, Stack } from "@mui/material";
import TextField from "../../../../../Components/InputField/TextField";
import DateField from "../../../../../Components/InputField/Date/DatePicker";
import SelectFields from "../../../../../Components/InputField/SelectField";
import { LEAVE_TYPES } from "../../../../../Data/Requests";
import Button from "../../../../../Components/Button";

type Inputs = {
  startDate: any;
  endDate: any;
  leaveType: string;
  remark: string;
};

const LongLeaveRequestHeaderForm = (props: any) => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>({});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <DateField
            name="startDate"
            variant="outlined"
            control={control}
            label="Start Date"
            rules={{ required: "this field is required" }}
            error={errors.startDate && true}
            helperText={errors.startDate && errors.startDate.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DateField
            name="endDate"
            variant="outlined"
            control={control}
            label="endDate"
            rules={{ required: "this field is required" }}
            error={errors.endDate && true}
            helperText={errors.endDate && errors.endDate.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectFields
            id="leaveType"
            variant="outlined"
            label="Leave Type"
            fullWidth
            menu={LEAVE_TYPES}
            inputProps={{
              ...register("leaveType", { required: "This field is required" }),
            }}
            error={errors.leaveType && true}
            helperText={errors.leaveType && errors.leaveType.message}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Remark"
            id="remark"
            name="remark"
            placeholder="Remark"
            inputProps={{
              ...register("remark", {
                maxLength: { value: 250, message: "Max 250 character allowed" },
              }),
            }}
            error={errors.remark && true}
            helperText={errors.remark && errors.remark.message}
          />
        </Grid>
      </Grid>
      <Stack alignItems={`flex-end`} sx={{ my: 2 }}>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="success"
        >
          Add
        </Button>
      </Stack>
    </form>
  );
};

export default LongLeaveRequestHeaderForm;
