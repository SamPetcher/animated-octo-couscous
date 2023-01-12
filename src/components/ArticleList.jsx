import ArticleCard from "./ArticleCard";
import { v4 as uuidv4 } from 'uuid';
function ArticleList({ articles, isLoaded }) {

  if (isLoaded === false) {
    return <div className="loader"></div>;
  } else {
    return (
      <main>
        {articles.map((article) => {
          return <ArticleCard key={uuidv4()} article={article} />;
        })}
      </main>
    );
  }
}
export default ArticleList;
