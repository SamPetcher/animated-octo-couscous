import { postCommentData } from "../utils/api";
import { useState } from "react";

function FormUI({ article }) {
  const [commentIsSubmitted, setcommentIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState()
  function handleSubmit(e) {
    setIsLoading(true)
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const commentData = Object.fromEntries(formData.entries());
    commentData.username = "jessjelly";
    console.log(article.article_id);
    setcommentIsSubmitted(true);
    postCommentData(commentData, article.article_id).then((res) => {
      setIsLoading(false)
      setcommentIsSubmitted(true);
      console.log(res);
    });
  }

  if (commentIsSubmitted === false) {
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Comment:
          <input type="text" name="body" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  } else {
    return (
      <>
      
      {isLoading && <div className="loader"></div>}
      {commentIsSubmitted && <h1>Submitted!</h1>}
      </>
    );
  }
}
export default FormUI;



