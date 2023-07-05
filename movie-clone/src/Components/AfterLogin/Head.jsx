import MenuList from "./MenuList";
import HeaderItem from "./HeaderItem";
import { useState } from "react";
import axios from "axios";
import { HiDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const menu = MenuList();

  const handleClick = (menuItem) => {
    if (menuItem === "HOME") {
      navigate("/home");
    }
    if (menuItem === "SEARCH") {
      navigate("/search");
    }
    if (menuItem === "WATCH LIST") {
      navigate("/watchlist");
    }
    if (menuItem === "ORIGINALS") {
      navigate("/originals");
    }
    if (menuItem === "MOVIES") {
      navigate("/movies");
    }
    if (menuItem === "SERIES") {
      navigate("/series");
    }
  };

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <div className="hidden md:flex gap-8 ">
          {menu.map((item) => (
            <HeaderItem
              handleClick={handleClick}
              key={item.name}
              name={item.name}
              Icon={item.icon}
            />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem
                  handleClick={handleClick}
                  key={item.name}
                  name={""}
                  Icon={item.icon}
                />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem
              handleClick={handleClick}
              name={""}
              Icon={HiDotsVertical}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
