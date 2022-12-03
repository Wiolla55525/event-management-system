import React, { useEffect, useState } from "react";
import "./App.css";
import { Attendee } from "./Components/Attendee/Attendee";
import { Login } from "./Components/Login/Login";

function App() {
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
  
  
    const Logout = () => {
      console.log('Logout')
      setUser({email: ''})
    }
    
 
  return (
    <div>
      {(user.email !=="") ? (
        <div className="">
          <h2>Welcome {user.email}</h2>
          <button onClick={Logout}>Logout</button>
          {/* <Attendee /> */}
        </div>
      ) : (
      <Login />
      )}
    </div>

  );
}

export default App;
