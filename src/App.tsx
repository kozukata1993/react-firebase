import React, { useEffect, useState } from "react";
import "./App.css";
import "firebase/firestore";
import { getUsers } from "./plugins/firebase";
import { User } from "./interfaces";

const App = () => {
  // addUser();
  const [users, setUsers] = useState<User[]>([
    {
      first: "jack",
      last: "Lovelace",
      born: 1915
    }
  ]);

  const asyncSetUsers = async () => {
    setUsers(await getUsers());
  };

  useEffect(() => {
    asyncSetUsers();
  }, []);

  const arr = ["Google", "Amazon", "Facebook", "Apple"];

  return (
    <div className="App">
      <h2>{arr[0]}</h2>
      <h2>{users[0].first}</h2>
    </div>
  );
};

export default App;
