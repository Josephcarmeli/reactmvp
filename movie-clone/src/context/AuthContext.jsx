import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser =
      localStorage.getItem("user") !== null
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    setCurrentUser(savedUser);
  }, []);

  async function signup(username, email, password) {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          username,
          email,
          password,
        }
      );
      if (response.data) {
        await setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data.userid));
        // console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function login(username, password) {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          username,
          password,
        }
      );
      if (response.data) {
        await setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data.userid));
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
