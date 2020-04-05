import { Article } from "../interfaces";
import { firestore } from "./index";

export const addArticle = () => {
  firestore
    .collection("articles")
    .add({
      title: "React & Firebase",
      content: "Awsome!",
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

export const getArticles = async () => {
  const articles: Article[] = [];
  const querySnapshot = await firestore.collection("articles").get();
  querySnapshot.forEach((doc) => {
    articles.push({
      title: doc.data().title,
      content: doc.data().content,
    });
  });
  return articles;
};
