import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
    {
      name: "LOGIN",
      icon: HiPlayCircle,
    },
    {
      name: "SIGNUP",
      icon: HiPlayCircle,
    },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index < 3 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* <button
        className=" bg-inherit text-white flex items-center gap-3
        text-[15px] font-semibold cursor-pointer hover:underline
        underline-offset-8 mb-2"
        onClick={() => setShowLoginForm(true)}
      >
        Login
      </button>
      <button
        className="bg-inherit text-white"
        onClickj={() => setShowSignupForm(true)}
      >
        Sign Up
      </button>
      {showLoginForm && <Login setShowLoginForm={setShowLoginForm} />}
      {showSignupForm && <Signup setShowSignupForm={setShowSignupForm} />} */
}
