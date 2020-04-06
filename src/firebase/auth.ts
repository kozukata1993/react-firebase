import { authentication } from "./index";

export const signUp = async (email: string, password: string) => {
  await authentication.createUserWithEmailAndPassword(email, password);
};

export const login = async (email: string, password: string) => {
  await authentication.signInWithEmailAndPassword(email, password);
  console.log(email, password);
};
