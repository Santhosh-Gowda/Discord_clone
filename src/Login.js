import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <h2>Login</h2>
      <div className="login__logo">
        <img
          src="https://logovtor.com/wp-content/uploads/2020/07/discord-logo-vector.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>SignIn</Button>
    </div>
  );
};

export default Login;
