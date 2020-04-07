import React from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { signUp, login, loginUsingGoogle } from "../firebase/auth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export const LoginForm: FC = ({}) => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = ({ email, password }: any) => {
    signUp(email, password);
  };
  const onLogin = ({ email, password }: any) => {
    login(email, password);
  };
  const isSignup = false;

  if (isSignup) {
    return (
      <form
        className={classes.root}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            inputRef={register({ required: true })}
            required
            id="standard-required"
            label="Email"
            name="email"
          />
          <TextField
            inputRef={register({ required: true })}
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
          />
        </div>
        <Button variant="outlined" color="primary" type="submit">
          Sign up
        </Button>
      </form>
    );
  } else {
    return (
      <>
        <form
          className={classes.root}
          onSubmit={handleSubmit(onLogin)}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              inputRef={register({ required: true })}
              required
              id="standard-required"
              label="Email"
              name="email"
            />
            <TextField
              inputRef={register({ required: true })}
              required
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              name="password"
            />
          </div>
          <Button className={classes.button} variant="outlined" color="primary" type="submit">
            Log in
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={() => {
              loginUsingGoogle();
              console.log("Google");
            }}
          >
            Log in Using Google
          </Button>
        </form>
      </>
    );
  }
};
