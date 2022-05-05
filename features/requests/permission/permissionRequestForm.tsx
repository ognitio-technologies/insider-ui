import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Grid, Stack } from "@mui/material";
import TextField from "../../../Components/InputField/TextField";
import DateField from "../../../Components/InputField/Date/DatePicker";
import SelectFields from "../../../Components/InputField/SelectField";
import Button from "../../../Components/Button";

import { LEAVE_TYPES } from "../../../Data/Requests";

type Inputs = {
  startDateTime: Date;
  endDateTime: Date;
  permissionHour: any;
  permissionType: any;
  reason: string;
};

const PermissionRequestForm = (props: any) => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>({});

  const [hour, setHour] = React.useState("0.01");

  const onChangeStartDate = (e: any) => {
    console.log("startDate", e.target.value);
    setHour(e.target.value);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <SelectFields
            id="permissionType"
            variant="outlined"
            label="Permission Type"
            fullWidth
            menu={LEAVE_TYPES}
            inputProps={{
              ...register("permissionType", {
                required: "This field is required",
              }),
            }}
            error={errors.permissionType && true}
            helperText={errors.permissionType && errors.permissionType.message}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <DateField
            name="startDateTime"
            variant="outlined"
            control={control}
            onChange={onChangeStartDate}
            label="Date"
            rules={{ required: "this field is required" }}
            error={errors.startDateTime && true}
            helperText={errors.startDateTime && errors.startDateTime.message}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <DateField
            name="endDateTime"
            variant="outlined"
            control={control}
            label="Date"
            rules={{ required: "this field is required" }}
            error={errors.endDateTime && true}
            helperText={errors.endDateTime && errors.endDateTime.message}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="Duration (Hour)"
            id="permissionHour"
            name="permissionHour"
            placeholder="00.00"
            value={hour}
            onChange={(e: any) => setHour(e.target.value)}
            inputProps={{
              ...register("permissionHour", {
                required: "This field is required",
              }),
            }}
            error={errors.permissionHour && true}
            helperText={errors.permissionHour && errors.permissionHour.message}
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

export default PermissionRequestForm;
