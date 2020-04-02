import React, { useEffect, useState } from "react";
import "./App.css";
import "firebase/firestore";
import { getUsers } from "./plugins/firebase";
import { User } from "./plugins/firebase";

const App = () => {
  // addUser();
  const [users, setUsers] = useState<User[]>([
    {
      first: "jack",
      last: "Lovelace",
      born: 1915
    }
  ]);

  const asyncFunc = async () => {
    const result = await getUsers();
    setUsers(result);
  };

  useEffect(() => {
    asyncFunc();
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
