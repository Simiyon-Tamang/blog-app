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

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
    console.log(inputs);
  };
  return (
    /* From Uiverse.io by Yaya12085 */
    <div
      className="flex items-center justify-center min-h-screen w-full "
      style={{
        background: "linear-gradient(135deg, #7747ff, #1e0e4b)",
      }}
    >
      <div class=" relative flex flex-col p-5 rounded-md text-black bg-white w-120 ">
        <div class="text-4xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome to <span class="text-[#7747ff]">Blog App</span>
        </div>
        <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Signup
        </div>
        <form class="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div class="block relative">
            <label
              for="fullName"
              class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Full Name
            </label>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              type="text"
              id="fullName"
              class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            />
          </div>
          <div class="block relative">
            <label
              for="userName"
              class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              User Name
            </label>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
              type="text"
              id="userName"
              class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            />
          </div>
          <div class="block relative">
            <label
              for="password"
              class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              id="password"
              class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div class="block relative">
            <label
              for="password"
              class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Confirm Password
            </label>
            <input
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              type="password"
              id="password"
              class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <GenderCheckbox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <button
            type="submit"
            class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Signup
          </button>
        </form>
        <div class="text-sm text-center mt-[1.6rem]">
          Already have an account?{" "}
          <Link to="/login" class="text-sm text-[#7747ff]" href="#">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
