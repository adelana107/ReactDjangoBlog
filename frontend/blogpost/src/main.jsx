import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage.jsx";
import CreatePost from "./pages/CreatePost.jsx"
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path='/create' element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
