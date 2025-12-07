import React, { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import "./CreatePost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/posts/", { title, content });
      if (response.status === 201 || response.status === 200) {
        setMessage("Post created successfully!");
        setTitle("");
        setContent("");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to create post.");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="create-post-page">
        <div className="create-post-container">
          <h1>Create Post</h1>
          {message && <p className="message">{message}</p>}

          <form className="create-post-form" onSubmit={handleSubmit}>
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
                required
                rows={6}
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
