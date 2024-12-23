import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { AuthContextProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Post from "./components/post/Post.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>
);
