import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch post data from GET endpoint
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/postpage/${id}/`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch post");
        setLoading(false);
      });
  }, [id]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/edit-post/${id}/`,
        {
          title,
          content,
        }
      );

      if (response.status === 200) {
        setMessage("Post updated successfully!");
        setTimeout(() => {
          navigate(`/post/${id}`);
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setMessage("Failed to update post.");
    }
  };

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "200px" }}>Loading post...</p>
    );

  if (error)
    return (
      <p style={{ color: "red", textAlign: "center", marginTop: "200px" }}>
        {error}
      </p>
    );

  return (
    <div className="edit-post-page">
      <NavBar />
      <div className="edit-post-container">
        <h1>Edit Post</h1>
        {message && <p className="message">{message}</p>}
        <form className="edit-post-form" onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              required
            />
          </div>

          <button type="submit">Update Post</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditPost;
