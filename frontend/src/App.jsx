import "./App.css";
import Home from "./pages/home/Home";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import "./index.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup.jsx";

import { useAuthContext } from "./context/AuthContext.jsx";

import { Toaster } from "react-hot-toast";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;

/*


*/
