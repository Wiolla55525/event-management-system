import "./login.css";
import { useState } from "react";
import { useForm } from "../Hooks/useForm";

export function Login({ handleChange, values, errors, handleSubmit, 
    isSubmitting}) {

    const [details, setDetails ] = useState({email : "", password: ""})
    const [user, setUser] = useState({email: "", password: ""});

    const adminUser = {
      email: "admin@user.com",
      password: "adminadmin"
    }

    const Loginn = details => {
        console.log(details)
        if (details.email === adminUser.email && details.password === adminUser.password){
    console.log('Logged in')  
    setUser({
        email: details.email,

    });
    } else {
        console.log('details not match')}
    }
    
    
//       const Logout = () => {
//         console.log('Logout')
//         setUser({email: ''})
//       }
      
    const formLogin = (e) => {

    // console.log("Callback function when form is submitted!");
    // console.log("Form Values ", values);
    e.preventDefault();
    Loginn(details)
  };

  console.log(values);

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
                          <form onSubmit={formLogin}>
                            <div className="form-group">
                              <input
                              value={details.email}
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Email"
                                id="logemail"
                                onChange={
                                    e => setDetails({
                                        ...details, email: e.target.value
                                    })
                                }
                              />
                              <i className="input-icon uil uil-at"></i>
                            </div>
                            <div className="form-group mt-2">
                              <input
                              value={details.password}
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Password"
                                id="password"
                                onChange={  e => setDetails({
                                    ...details, password: e.target.value
                                })}
                                minLength="5"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <div>
                              {!isSubmitting && (
                                <button
                                  type="submit"
                                  value="Submit"
                                  className="btn mt-4"
                                  //   onSubmit={handleSubmit}
                                >
                                  SUBMIT
                                </button>
                              )}{" "}
                              {isSubmitting && (
                                <div className="d-flex justify-content-center my-3">
                                  <div
                                    className="spinner-border text-secondary "
                                    role="status"
                                  >
                                    <span className="sr-only"></span>
                                  </div>
                                </div>
                              )}
                            </div>
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
                          <form onSubmit={handleSubmit}>
                            <div className="form-group">
                              <input
                                type="text"
                                name="username"
                                className="form-style"
                                placeholder="Full Name"
                                id="logname"
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                                minLength="5"
                              />
                              <i className="input-icon uil uil-lock-alt"></i>
                            </div>
                            <button
                              type="submit"
                              value="Submit"
                              className="btn mt-4"
                              //   onSubmit={handleSubmit}
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
            <button className="btn mb-5">Check demo version</button>
          </div>
        </div>
      </div>
    </div>
  );
}
