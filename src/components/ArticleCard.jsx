function ArticleCard({ article }) {
  
  function iconSetter(topic) {
    switch (topic) {
      case "cooking":
        return "🍳";
      case "coding":
        return "💻"
      case "football":
        return "⚽"
      default:
        return "O"
  }
}


  return (
    <article>
      <icon>{iconSetter(article.topic)}</icon>
      <section>
        <h1>{article.title}</h1>
        <i>{article.author}</i>
        <time>{article.date}</time>
        <i>{article.comment_count} comments</i>
      </section>
    </article>
  );
}
export default ArticleCard;
