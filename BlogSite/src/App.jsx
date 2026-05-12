import blog from "./components/blog.jsx";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Post from "./components/Post";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header name={blog.name} />
      
      <main className="content-area">
        <PostList posts={blog.posts} />
      </main>
    </div>
  );
}

export default App;