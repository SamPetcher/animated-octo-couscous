import { useState, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      console.log(articles);
      setArticles(articles);
      setIsLoaded(true);
    });
  }, []);

  if (isLoaded === false) {
    return <div className="loader"></div>;
  } else {
    return (
      <main>
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
        
      </main>
    );
  }
}
export default ArticleList;
