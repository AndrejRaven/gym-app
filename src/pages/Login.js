import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {auth} from "../firebase";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Successfully logged in with email/password!", auth);
      navigate('/dashboard')
    } catch (error) {
      console.error("Error logging in with email/password:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Successfully logged in with Google!", result.user);
      navigate('/dashboard')
    } catch (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };

  return (
    <LoginForm>
      <Title>Login</Title>
      <form onSubmit={handleLogin}>
        <FormLabel>Email:</FormLabel>
        <InputField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel>Password:</FormLabel>
        <InputField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SubmitButton type="submit">Login with Email/Password</SubmitButton>
      </form>
      <GoogleSignInButton onClick={handleGoogleSignIn}>
          Sign In with Google
        </GoogleSignInButton>

        <div>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </div>
    </LoginForm>
  );
};

export default Login;


const LoginForm = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none; /* Remove default outline */
  transition: border-color 0.2s ease; /* Add a smooth transition for better user experience */

  &:focus {
    border-color: #007bff; /* Change border color on focus */
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const GoogleSignInButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;