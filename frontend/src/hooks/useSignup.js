import React from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = React.useState(false);
  const signup = async (inputs) => {
    if (!handleInputErrors(inputs)) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors(inputs) {
  if (
    !inputs.fullName ||
    !inputs.userName ||
    !inputs.password ||
    !inputs.confirmPassword
  ) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (inputs.password !== inputs.confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (inputs.password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return false;
  }
  return true;
}
