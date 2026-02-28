import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Login.css"; 

function Login() {
  const [login, setLogin] = useState("");

  return (
    <>

      {login ? (
        <nav>
          <Navbar/>
          <button onClick={() => setLogin(false)} >
            Logout
          </button>
        </nav>
      ) : (
        <nav>
          <button onClick={() => setLogin(true)} >
            Login
          </button>
        </nav>
      )}

  
        <div className="login">
          <h1>Login Page</h1>

               Email:
          <input type="username" id="username" />
          <br /><br />

          Password:
          <input type="password" id="password" />
          <br /><br />

            <button onClick={() => setLogin(true)} >
              Login
            </button>
        
        </div>
     
    </>
  );
}

export default Login;
