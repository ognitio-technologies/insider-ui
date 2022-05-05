import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Grid, Stack } from "@mui/material";
import TextField from "../../../../Components/InputField/TextField";
import DateField from "../../../../Components/InputField/Date/DatePicker";
import SelectFields from "../../../../Components/InputField/SelectField";
import Button from "../../../../Components/Button";

import { LEAVE_TYPES } from "../../../../Data/Requests";

type Inputs = {
  leaveDate: any;
  leaveType: any;
  reason: string;
};

const LeaveRequestForm = (props: any) => {
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
            name="leaveDate"
            variant="outlined"
            control={control}
            label="Date"
            rules={{ required: "this field is required" }}
            error={errors.leaveDate && true}
            helperText={errors.leaveDate && errors.leaveDate.message}
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
        <Grid item xs={12}>
          <TextField
            label="Reason"
            id="reason"
            name="reason"
            placeholder="Reason"
            inputProps={{
              ...register("reason", {
                required: "This field is required",
                maxLength: { value: 250, message: "Max 250 character allowed" },
              }),
            }}
            multiline
            rows={6}
            error={errors.reason && true}
            helperText={errors.reason && errors.reason.message}
          />
        </Grid>
      </Grid>
      <Stack alignItems={`flex-end`} sx={{ my: 2 }}>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default LeaveRequestForm;
