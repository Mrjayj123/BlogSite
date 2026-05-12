import Post from "./Post";

export default function PostList({ posts }) {
  return (
    <div className="post-list-container">
      {posts.map((post) => (
        <Post 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
        />
      ))}
    </div>
  );
}