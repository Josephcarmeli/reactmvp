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
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#root");

function Header() {
  const [toggle, setToggle] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState({});

  const handleLogin = (data) => {
    axios
      .post("/api/users/login", data)
      .then((res) => {
        const token = res.data.userid;
        localStorage.setItem("token", token);
        console.log(token);
      })
      .catch((error) => {
        console.error(error);
      });
    // const token = localStorage.setItem("token");
    // console.log(token);
  };

  const handleSignup = (e, data) => {
    e.preventDefault();
    axios
      .post("/api/users", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const openModal = (form) => {
    setModalIsOpen(true);
    setCurrentForm(form);
  };

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
      isForm: true,
      handleSubmit: handleLogin,
      fields: [
        { name: "username", placeholder: "Username", type: "text" },
        { name: "password", placeholder: "Password", type: "password" },
      ],
    },
    {
      name: "SIGNUP",
      icon: HiPlayCircle,
      isForm: true,
      handleSubmit: handleSignup,
      fields: [
        { name: "username", placeholder: "Username", type: "text" },
        { name: "password", placeholder: "Password", type: "password" },
        { name: "email", placeholder: "Email", type: "email" },
      ],
    },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <div className="hidden md:flex gap-8 ">
          {menu.map((item) => (
            <HeaderItem
              key={item.name}
              name={item.name}
              Icon={item.icon}
              isForm={item.isForm}
              handleSubmit={item.handleSubmit}
              fields={item.fields}
              openModal={openModal}
            />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem
                  key={item.name}
                  name={""}
                  Icon={item.icon}
                  isForm={item.isForm}
                  handleSubmit={item.handleSubmit}
                  fields={item.fields}
                  openModal={openModal}
                />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="z-50  absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 right-0">
                {menu.map(
                  (item, index) =>
                    index < 8 && (
                      <HeaderItem
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                        isForm={item.isForm}
                        handleSubmit={item.handleSubmit}
                        fields={item.fields}
                        openModal={openModal}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Modal
        className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-70"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="bg-#131520 rounded-lg p-8 m-4 max-w-xl mx-auto">
          <h2 className="text-2xl text-white font-bold mb-4">
            {currentForm.name}
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.target);
              currentForm.handleSubmit(Object.fromEntries(data.entries()));
              setModalIsOpen(false);
            }}
            className="space-y-4"
          >
            {currentForm.fields?.map((field) => (
              <input
                key={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="border p-2 w-full"
              />
            ))}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
