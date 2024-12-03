import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

/*
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

*/
