import React, { useEffect, useState } from "react";
import "./App.css";
import "firebase/firestore";
import { getUsers } from "./plugins/firebase";
import { User } from "./interfaces";
import { LoginForm } from "./components/loginForm";
import { DenseAppBar } from "./components/appBar";

const App = () => {
  // addUser();
  const [users, setUsers] = useState<User[]>([
    {
      first: "jack",
      last: "Lovelace",
      born: 1915,
    },
  ]);

  const asyncSetUsers = async () => {
    setUsers(await getUsers());
  };

  useEffect(() => {
    asyncSetUsers();
    console.log(users);
  }, []);

  return (
    <div className="App">
      <DenseAppBar />
      <LoginForm />
    </div>
  );
};

export default App;
