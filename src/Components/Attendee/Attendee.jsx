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
    const newState = [...attendees];
    newState[newIndex] = {
      ...changeInfo,
      id,
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
      });
  }
  useEffect(()=>{
    getData()
  },[])

  // {
  //   data && data.length>0 && data.map((item)=><p>{item.id}</p>)
  // }


  const addAttendee = attendees.map((attendee, index) => (
    <div key={index} className=" my-1 align">
      <Attendees
        key={index}
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
