import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPost from "./components/BlogPost";
import Header from "./components/Header";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/") // your API endpoint
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "120px 20px 40px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Latest Posts</h2>
        {loading && <p>Loading posts...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {posts.map((post) => (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </main>
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
          color: "#777",
        }}
      >
        © 2025 My Blog Site
      </footer>
    </div>
  );
}

export default App;
