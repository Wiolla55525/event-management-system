import "./login.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdditionalContentExample, Spinner } from "./Alert"

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    console.log("I am in Login const");
    Axios.post("/login", { email: email, password: password }).then(
      (response) => {
        if (response.data.message) {
          console.log("sth wrong");
          setLoginStatus(response.data.message);
        } else {
          console.log("all good");
          setLoginStatus(response.data[0].email);
          navigate("/users");
        }
        console.log(response.data);
      }
    );
  };

  useEffect(() => {
    console.log("I am in useEffect const");

    Axios.get("/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.email[0].username);
      }
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <form onSubmit={Login}>
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Email"
                                id="logemail"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Password"
                                id="password"
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                minLength="5"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>

                            <button
                              type="submit"
                              value="Submit"
                              className="btn mt-4"
                              onClick={Login}
                            >
                              SUBMIT
                            </button>
                            <h5 className="pt-2"> 
                            {loginStatus}
                            
                            </h5>
                            {/* <Spinner/> */}

                          </form>

                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <form>
                            <div className="form-group">
                              <input
                                type="text"
                                name="username"
                                className="form-style"
                                placeholder="Full Name"
                                id="logname"
                                minLength="5"
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Email"
                                id="loginemail"
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Password"
                                id="loginpassword"
                                minLength="5"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button
                              type="submit"
                              value="Submit"
                              className="btn mt-4"
                            >
                              SUBMIT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn mb-5"
              onClick={() =>
                alert(
                  "TRY TO ENTER: admin@admin.com (Email) && admin123 (password)"
                )
              }
            
              Check demo version
            // (<AdditionalContentExample/>)}
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
