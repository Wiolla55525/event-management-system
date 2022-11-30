import { Attendees } from "./AttendeeList";
import { AddAttendeeForm } from "./AddAttendee";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

export function Attendee() {
  // const [attendees, setAttendees] = useState(getSavedData());
  const [editState, setEdit] = useState({});

  // function getSavedData() {
  //   const savedData = localStorage.getItem("Attendee");
  //   const res = JSON.parse(savedData);
  //   return res || [];
  // }

  // useEffect(() => {
  //   localStorage.setItem("Attendee", JSON.stringify(attendees));
  // }, [attendees]);

  function handleDeleteAttendee(id) {
    setAttendees(attendees.filter((attendee) => attendee.id !== id));
  }

  function handleAddAttendee(data, id) {
    setAttendees([
      ...attendees,
      {
        ...data,
        id: new Date().getTime(),
      },
    ]);
  }

  function handleEditAttendee(id) {
    setEdit(attendees.filter((attendee) => attendee.id === id)[0]);
  }

  function updateAttendee(changeInfo, id) {
    const newIndex = attendees.findIndex(
      (attendee) => attendee.id === changeInfo.id
    );
    const newState = 
    [...attendees];
    newState[newIndex] = {
      ...changeInfo
    };

    setAttendees(newState);
  }

  const [attendees, setAttendees] = useState([]);



  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setAttendees(myJson)
      })
      .catch((err) => {
        console.log(err.message);
     });
  }

  useEffect(()=>{
    getData()
  },[])


  const [firstName, setfirstName] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const addPosts = async (firstName, email, lastName, age) => {
    await fetch('data.json', {
    method: 'POST',
    body: JSON.stringify({
      firstName: firstName,
      email: email,
      lastName: lastName,
      age: age,
       id: Math.random().toString(36).slice(2),
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
      setAttendees((attendees) => [data, ...attendees]);
       setfirstName('');
       setEmail('');
       setLastName('');
       setAge('');
    })
    .catch((err) => {
       console.log(err.message);
    });
    };

  const addAttendee = attendees.map((attendee, index) => (
    <div key={index} className=" my-1 align">
      <Attendees
        updateAttendee={updateAttendee}
        changeValueOfState={editState}
        info={attendee}
        onDelete={handleDeleteAttendee}
        onEdit={handleEditAttendee}
      />
    </div>
  ));





  return (
    <Container>
      <div className="pt-5 pb-2 text-center">
        <h1 className="">
          MANAGEMENT <br /> DASHBOARD
        </h1>
      </div>

      <div className=" row d-flex justify-content-center">
        <div className="mb-5 col Container-bigger">
          <h2 className="">Create Attendee</h2>
          <AddAttendeeForm
            prop="Submit"
            handleAddAttendee={(value, id) => handleAddAttendee(value, id)}
          />
        </div>
      </div>

      <div className=" row d-flex justify-content-center">
        <h2 className="tableName py-4">Attendee list:</h2>
        {attendees.length > 0 ? (
          addAttendee
        ) : (
          <div className="text-center">No attendees found</div>
        )}
      </div>
    </Container>
  );
}
