import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    button: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export const FormPropsTextFields = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          inputRef={register}
          required
          id="standard-required"
          label="Name"
          name="name"
        />
        <TextField
          inputRef={register}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
        />
      </div>
      <Button variant="outlined" color="primary" type="submit">
        Primary
      </Button>
    </form>
  );
};
