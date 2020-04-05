import { authentication } from "./index";
import { User } from "../interfaces";

export const createUser = async (email: string, password: string) => {
  await authentication.createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
};

export const login = async (email: string, password: string) => {
  await authentication.signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (error) {
      console.log(errorCode, errorMessage);
    }
    // ...
  });
  console.log(getCurrentUser());
};

export const getCurrentUser = () => {
  let currentUser!: User | null;
  authentication.onAuthStateChanged((user) => {
    currentUser = user;
  });
  return currentUser;
};
