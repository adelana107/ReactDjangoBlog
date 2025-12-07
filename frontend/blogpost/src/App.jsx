import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogPost from "./pages/BlogPost";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/")
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
    <div className="app-container">
     
      <NavBar />

      <main className="main-content">
        <h2 className="latest-posts-title">Latest Posts</h2>

        {loading && <p>Loading posts...</p>}
        {error && <p className="error">{error}</p>}

        {posts.map((post) => (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
