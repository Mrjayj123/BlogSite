function Post({ title, date, preview }) {
  return (
    <article className="glass-card">
      <h2>{title}</h2>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Post;