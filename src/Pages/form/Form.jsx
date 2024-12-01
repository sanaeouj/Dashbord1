import React, { useState } from "react";
import { Box, Stack, MenuItem, Button, TextField, Snackbar, Alert } from "@mui/material"; // Imported correctly
import { useForm } from "react-hook-form";
import Header from "../../Components/Header";

// Validation regex
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
      noValidate
      autoComplete="off"
    >
  <Header Title="CONTACTE USER" subTitle="Create a New User Profile" />

      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "This field is required" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          id="first-name"
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "This field is required" : null}
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          id="last-name"
          label="Last Name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={errors.email ? "Please provide a valid email address" : null}
        {...register("email", { required: true, pattern: regEmail })}
        id="email"
        label="Email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.contactNumber)}
        helperText={errors.contactNumber ? "Please provide a valid phone number" : null}
        {...register("contactNumber", { required: true, pattern: phoneRegex })}
        id="contact-number"
        label="Contact Number"
        variant="filled"
      />
      <TextField id="address-1" label="Address 1" variant="filled" />
      <TextField id="address-2" label="Address 2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="Admin"
        helperText="Please select your role"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            padding: "12px 24px",
            fontSize: "1rem",
            textTransform: "capitalize",
          }}
        >
          Create New User
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          User successfully created!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Form;
