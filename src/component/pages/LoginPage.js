import React from "react";
import { useState, useEffect } from "react";
import notesStore from "../stores/notesStore";
import LoginForm from "../LoginForm";
import authStore from "../stores/authStore";


function LoginPage({note}){

  const store = authStore();

  return(
    <div>
 <LoginForm />
 </div>
  )

}
export default LoginPage;
