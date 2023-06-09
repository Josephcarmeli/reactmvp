import { useState } from "react";
import axios from "axios";

function Login({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("/api/users", { username, password })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label className="text-white">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="text-white">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Login" className="text-white" />
      </form>
    </div>
  );
}

export default Login;
