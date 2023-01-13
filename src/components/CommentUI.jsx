import { useEffect, useState } from "react";
import  FormUI  from "./FormUI"
import { fetchComments } from "../utils/api";
import { v4 as uuidv4 } from "uuid";
import CommentCard from "./CommentCard";
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
    <>
    <section className="CommentUI">
      <h1>Comments:</h1>
      <hr />
      {commentBody.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </section>

<FormUI article={article} />
    </>  
  );
}
export default CommentUI;

