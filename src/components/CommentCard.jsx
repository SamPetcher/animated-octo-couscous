function CommentCard({comment}) {
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
}
export default CommentCard;
