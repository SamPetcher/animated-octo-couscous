import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([])
   
  useEffect( () => {
    fetchArticles()
    .then( ({ articles }) => {
      console.log(articles, "<<<articles")
      setArticles(articles);
},)
  },[])
  return (
    <main>
    This is the main articles area
    { articles.map( (article) => {
      return <ArticleCard article={article} />
    })})
    </main>
  );
}
export default ArticleList
