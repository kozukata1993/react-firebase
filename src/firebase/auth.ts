import { authentication } from "./index";

export const signUp = async (email: string, password: string) => {
  await authentication().createUserWithEmailAndPassword(email, password);
};

export const login = async (email: string, password: string) => {
  await authentication().signInWithEmailAndPassword(email, password);
  console.log(email, password);
};

export const loginUsingGoogle = async () => {
  const provider = new authentication.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  await authentication().signInWithPopup(provider);
};

export const logout = async () => {
  await authentication().signOut();
};
