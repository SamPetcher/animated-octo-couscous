import { useEffect, useState } from "react";
import { fetchComments } from "../utils/api";
import { v4 as uuidv4 } from 'uuid';
function CommentUI({ article }) {
  const [commentBody, setCommentBody] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetchComments(article.article_id).then(({ comments }) => {
      setCommentBody(comments);
      setIsLoaded(true);
    });
  }, []);

  return (
    <section className="CommentUI">
      <h1>Comments:</h1>
      <hr />
      {commentBody.map((comment) => {
        return (
        <div key={comment.comment_id}>
            <div className="article__comment">
              <div  className="comment__top"><div className="votes">{comment.votes}</div><span> {comment.author}</span></div>
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
