import React, { useEffect, useState } from "react";
import "./App.css";
import { Attendee } from "./Components/Attendee/Attendee";

function App() {
  // const [attendee, setAttendee] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:3000/attendee")
  //     .then(res => res.json())
  //     .then(data => setAttendee(data))
  // }, []);

  
  return (
    <div>
      <Attendee/>
      
    </div>
  );
}

export default App;
