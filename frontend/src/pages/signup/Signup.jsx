import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { GenderCheckbox } from "./GenderCheckbox";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(inputs);
      console.log("Signup data:", inputs); // Log after successful signup
    } catch (error) {
      console.error("Signup failed:", error); // Handle errors in signup
    }
  };
  return (
    /* From Uiverse.io by Yaya12085 */
    <div
      className="flex items-center justify-center min-h-screen w-full "
      style={{
        background: "linear-gradient(135deg, #7747ff, #1e0e4b)",
      }}
    >
      <div className=" relative flex flex-col p-5 rounded-md text-black bg-white w-120 ">
        <div className="text-4xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome to <span className="text-[#7747ff]">Blog App</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Signup
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="block relative">
            <label
              htmlFor="fullName"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Full Name
            </label>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              type="text"
              id="fullName"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="userName"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              User Name
            </label>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
              type="text"
              id="userName"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              id="password"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Confirm Password
            </label>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              type="password"
              id="confirmPassword"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <GenderCheckbox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <button
            disabled={loading}
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Already have an account?{" "}
          <Link to="/login" className="text-sm text-[#7747ff]" href="#">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
