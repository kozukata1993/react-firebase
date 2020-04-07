import React, { useEffect, useState } from "react";
import { FC } from "react";
import "./App.css";
import "firebase/firestore";
import { authentication } from "./firebase/index";
import { User } from "./interfaces";
import { LoginForm } from "./components/loginForm";
import { DenseAppBar } from "./components/appBar";

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    console.log(currentUser?.email);
  });

  authentication().onAuthStateChanged(function (user) {
    setCurrentUser(user);
  });

  return (
    <div className="App">
      <DenseAppBar currentUser={currentUser} />
      <LoginForm />
    </div>
  );
};

export default App;
