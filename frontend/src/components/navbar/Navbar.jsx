import React from "react";
import Image from "../image/image";
import { Link } from "react-router-dom";
import Home from "../../pages/home/Home";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  return (
    <div className="navbar bg-base-100">
      <Link to="/" className="flex-1">
        <Image
          src="logo.png"
          alt="Logo"
          w={150}
          h={100}
          className={"rounded"}
        />
      </Link>
      <div className="flex-none gap-2">
        <button className="button btn-primary">Add Post</button>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-1"
          >
            <li>
              <button className="btn btn-info">Profile</button>
            </li>
            <li>
              <button className="btn btn-info ">Settings</button>
            </li>
            <li>
              <button className="btn btn-error w-auto " onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
