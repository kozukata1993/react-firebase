import React, { useEffect, useState } from "react";
import "./App.css";
import "firebase/firestore";
import { getUsers } from "./plugins/firebase";
import { User } from "./interfaces";
import { FormPropsTextFields } from "./components/loginForm";
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
  }, []);

  return (
    <div className="App">
      <DenseAppBar />
      <h2>{users[0].first}</h2>
      <FormPropsTextFields />
    </div>
  );
};

export default App;
