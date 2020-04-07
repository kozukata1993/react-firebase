import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_DEV_API_KEY,
  authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DEV_PROJECT_ID,
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
export const authentication = firebase.auth;
