import "../App.css";
import { v4 as uuidv4 } from 'uuid';
import { fetchArticles } from "../utils/api";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import ArticleView from "./Article";
import Navbar from "./Navbar.jsx";
import UserSection from "./UserSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="root">
      <BrowserRouter>
        <header className="hero">Nooze 😴</header>
        <Navbar />
        <Routes>
          <Route key={uuidv4()}
            index
            element={<ArticleList articles={articles} isLoaded={isLoaded} />}
          />
          {articles.map((article) => {
            return (
              <Route key={uuidv4()}
                path={`/${article.article_id}`}
                element={<ArticleView article={article} />}
              />
            );
          })}
        </Routes>
        <UserSection />
        <footer>FOOTER</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
