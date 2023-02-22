export default function CommentForm({ onSubmitComment }) {
  return (
    <form onSubmit={onSubmitComment}>
      <label htmlFor="comment">Leave a Comment:</label>
      <input id="comment" name="comment" type="text" autoFocus />
      <button className="submitButton">Submit</button>
    </form>
  );
}
