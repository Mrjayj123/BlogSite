export default function Post({ title, date, preview }) {
  return (
    <article className="post-card">
      <div className="post-content">
        <span className="post-date">{date}</span>
        <h2>{title}</h2>
        <p>{preview}</p>
        <button className="read-more-btn">Read Entry</button>
      </div>
    </article>
  );
}