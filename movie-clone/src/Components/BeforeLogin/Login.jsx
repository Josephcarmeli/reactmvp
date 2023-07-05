import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(username, password);
    navigate("/home");
  };

  const handleClick = () => {
    // console.log("clicked");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-700 text-white rounded mb-4 px-3 py-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 text-white rounded mb-4 px-3 py-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log In
          </button>
          <p className="text-white">
            Don't have an account?{" "}
            <Link onClick={handleClick} to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Header;
