import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
function CommentUI({ article }) {
  const [commentBody, setCommentBody] = useState([]);
  useEffect(() => {
    fetchComments(article.article_id).then(({ comments }) => {
      setCommentBody(comments);
    });
  }, [article.article_id]);

  return (
    <section className="CommentUI">
      <h1>Comments:</h1>
      <hr />
      {commentBody.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <div className="article__comment">
              <div className="comment__top">
                <div className="votes">{comment.votes}</div>
                <span> {comment.author}</span>
              </div>
              <p>{new Date(comment.created_at).toDateString()}</p>
            </div>
            <p>{comment.body}</p>
            <hr />
          </div>
        );
      })}
    </section>
  );
}
export default CommentUI;
