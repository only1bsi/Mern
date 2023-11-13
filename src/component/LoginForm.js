import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import authStore from "./stores/authStore";


function LoginForm(){

  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  await store.login();

  // Navigate
  navigate("/")
  }

  return(
    <form onSubmit={handleLogin}>
        <input onChange={store.updateLoginForm} 
        type="email" value={store.loginForm.email} 
        name="email"/>

        <input onChange={store.updateLoginForm} 
        type="password" 
        value={store.loginForm.password} 
        name="password" />
        
        <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;