import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/system/Box";
import { Stack } from "@mui/material";

import Button from "../../Components/Button";
import TextField from "../../Components/InputField/TextField";
import SelectFields from "../../Components/InputField/SelectField";
import RadioButton from "../../Components/InputField/RadioButton";
import Typography from "../../Components/Typography";
import Card from "../../Components/Card";

import { DOCTORS, CONFIRM } from "../../Data/Doctors/index";
import DateField from "../../Components/InputField/Date/DatePicker";

type Inputs = {
  feedbackDate: any;
  name: string;
  uhid: string;
  phone: string;
  email: string;
  comments: string;
  doctor: number;
  receptionService: number;
  attention: number;
  attittude: number;
  bill: number;
  doctorExplanation: number;
  nursingCare: number;
  lab: number;
  pharmacy: number;
  counselling: number;
  ambience: number;
  infrastructure: number;
  charges: number;
  overall: number;
  recomendation: string;
  suggession: string;
};

const BUTTONDATA = [
  { value: 5, buttonLabel: "Excellent" },
  { value: 4, buttonLabel: "Good" },
  { value: 3, buttonLabel: "Average" },
  { value: 2, buttonLabel: "Poor" },
  { value: 1, buttonLabel: "Don't Know" },
];

const FeedbackForm = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<Inputs>({
    defaultValues: {
      receptionService: 0,
      attention: 0,
      attittude: 0,
      bill: 0,
      doctorExplanation: 0,
      nursingCare: 0,
      lab: 0,
      pharmacy: 0,
      counselling: 0,
      ambience: 0,
      infrastructure: 0,
      charges: 0,
      overall: 0,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data, typeof data.receptionService);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <DateField
          name="feedbackDate"
          control={control}
          label="Feedback Date"
          rules={{ required: "this field is required" }}
          error={errors.feedbackDate && true}
          helperText={errors.feedbackDate && errors.feedbackDate.message}
        />
      </Card>
      <Card>
        <Stack
          direction={matchesSm ? "row" : "column"}
          alignItems={`center`}
          spacing={2}
        >
          <TextField
            variant="standard"
            id="name"
            label="Patient Name"
            fullWidth
            inputProps={{
              ...register("name", { required: "This field is required" }),
            }}
            error={errors.name && true}
            helperText={errors.name && errors.name.message}
          />
          <TextField
            variant="standard"
            id="name"
            label="UHID No"
            fullWidth
            inputProps={{ ...register("uhid") }}
            error={errors.uhid && true}
            helperText={errors.uhid && errors.uhid.message}
          />
        </Stack>
      </Card>
      <Card>
        <Stack
          direction={matchesSm ? "row" : "column"}
          alignItems={`center`}
          spacing={2}
        >
          <TextField
            variant="standard"
            id="name"
            label="Phone Number"
            fullWidth
            inputProps={{ ...register("phone") }}
            error={errors.phone && true}
            helperText={errors.phone && errors.phone.message}
          />
          <TextField
            variant="standard"
            id="name"
            label="Email"
            fullWidth
            inputProps={{ ...register("email") }}
            error={errors.email && true}
            helperText={errors.email && errors.email.message}
          />
        </Stack>
      </Card>
      <Card>
        <SelectFields
          id="doctor"
          label="Doctor consulted"
          fullWidth
          menu={DOCTORS}
          inputProps={{ ...register("doctor") }}
          error={errors.doctor && true}
          helperText={errors.doctor && errors.doctor.message}
        />
      </Card>
      <Typography variant="h4" gutterBottom>
        Reception and services
      </Typography>
      <Card>
        <RadioButton
          label="Service promptness at reception"
          name="receptionService"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Attention given to the patient"
          name="attention"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Attittude and behaviour"
          name="attittude"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Bill/Cash counter"
          name="bill"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Typography variant="h4" gutterBottom>
        Treatment and diagnosis
      </Typography>
      <Card>
        <RadioButton
          label="Doctors explanation about treatment"
          name="doctorExplanation"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Nurses and nursing care"
          name="nursingCare"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Lab services"
          name="lab"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Medicine and service at pharmacy"
          name="pharmacy"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Counselling session"
          name="counselling"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="General cleanliness and ambience"
          name="ambience"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Infrastructural facility (lobby, seating,toilets, etc."
          name="infrastructure"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Charges and cost of services"
          name="charges"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <RadioButton
          label="Overall experiance at ARMC AEGIS"
          name="overall"
          control={control}
          data={BUTTONDATA}
          row={matchesSm ? true : false}
        />
      </Card>
      <Card>
        <SelectFields
          id="recomendation"
          label="Would you recommended ARMC AEGIS to your friend and relative"
          fullWidth
          menu={CONFIRM}
          inputProps={{ ...register("recomendation") }}
          error={errors.recomendation && true}
          helperText={errors.recomendation && errors.recomendation.message}
        />
      </Card>
      <Card>
        <TextField
          variant="standard"
          id="suggession"
          label="Your valuable comments and suggessions"
          multiline
          maxRows={5}
          fullWidth
          inputProps={{ ...register("suggession") }}
          error={errors.suggession && true}
          helperText={errors.suggession && errors.suggession.message}
        />
      </Card>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default FeedbackForm;
