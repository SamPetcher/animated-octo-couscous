import { fetchArticle } from "../utils/api";
import CommentUI from "./CommentUI.jsx";
import { useState, useEffect } from "react";
function iconSetter(topic) {
  switch (topic) {
    case "cooking":
      return "🍳";
    case "coding":
      return "💻";
    case "football":
      return "⚽";
    default:
      return "O";
  }
}
function ArticleView({ article }) {
  const [articleBody, setArticleBody] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchArticle(article.article_id).then((response) => {
      setArticleBody(response);
      setIsLoaded(true);
    });
  }, []);

  if (isLoaded === false) {
    return <div className="loader"></div>;
  } else {
    return (
      <article className="articleBody">
        <h1>{articleBody.title}</h1>
        <aside>
          <p>
            {iconSetter(articleBody.topic)} {articleBody.topic}
          </p>
          <p>
            {personIcon}
            {articleBody.author}
          </p>
          <time>
            {timeIcon} {new Date(articleBody.created_at).toDateString()}{" "}
          </time>
          <p>
            {votesIcon}
            {articleBody.votes}
          </p>
        </aside>
        <main className="article__main">{articleBody.body}</main>
        <CommentUI article={article} />
      </article>
    );
  }
}

export default ArticleView;

const timeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const personIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);
const votesIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
    />
  </svg>
);
