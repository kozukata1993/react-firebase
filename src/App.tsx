import React, { useEffect, useState } from "react";
import "./App.css";
import "firebase/firestore";
import { getArticles } from "./firebase/firestore";
import { getCurrentUser } from "./firebase/auth";
import { Article } from "./interfaces";
import { LoginForm } from "./components/loginForm";
import { DenseAppBar } from "./components/appBar";

const App = () => {
  const [articles, setArticles] = useState<Article[]>([
    {
      title: "Init title",
      content: "Init content",
    },
  ]);

  const asyncSetArticles = async () => {
    setArticles(await getArticles());
  };

  useEffect(() => {
    // asyncSetArticles();
    console.log(getCurrentUser());
  }, []);

  return (
    <div className="App">
      <DenseAppBar />
      <LoginForm />
    </div>
  );
};

export default App;
