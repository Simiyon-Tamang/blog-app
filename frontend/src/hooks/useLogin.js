import React from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = React.useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async ({ userName, password }) => {
    if (!handleInputErrors({ userName, password })) {
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        localStorage.setItem("authUser", JSON.stringify(data));
        setAuthUser(data);
      }
    } catch (error) {
      toast.error("Invalid Login Credentials");
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function handleInputErrors({ userName, password }) {
  if (!userName || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
}
