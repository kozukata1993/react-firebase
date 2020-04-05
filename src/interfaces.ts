import * as firebase from "firebase/app";

export interface Article {
  title: string;
  content: string;
}

export interface User extends firebase.User {}
