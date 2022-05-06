import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Stack } from "@mui/material";
import Button from "../../../../../../Components/Button";
import TextField from "../../../../../../Components/InputField/TextField";

type Inputs = {
  reason: String;
};
const LongLeaveRequestForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>({});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // props.onSubmit(data);
    console.log("data");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="reason"
        name="reason"
        label="Reason"
        placeholder="Reason"
        inputProps={{
          ...register("reason", {
            required: "This field is required",
            maxLength: {
              value: 250,
              message: "Maximum 250 character allowed",
            },
          }),
        }}
        multiline
        rows={6}
      />
      <Stack alignItems={`flex-end`} sx={{ my: 2 }}>
        <Button color="primary" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default LongLeaveRequestForm;
