import { createContext, useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext(); // Create a context object

export const useAuthContext = () => {
  return useContext(AuthContext);
}; // creating a custom hook so that all the child components can access the context object without having to import it in each component

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("authUser")) || null
  );
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}; // Create a provider for the context object and pass the value to be shared with the children components of the provider component
