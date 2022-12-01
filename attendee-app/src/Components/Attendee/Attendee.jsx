import { Attendees } from "./AttendeeList";
import { AddAttendeeForm } from "./AddAttendee";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../api/contacts";

export function Attendee() {
  // const [attendees, setAttendees] = useState(getSavedData());
  const [editState, setEdit] = useState({});
  const [attendees, setAttendees] = useState([]);


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
  async function handleAddAttendee(data, id) {
    console.log(data)

    const request = {
      id: new Date().getTime(),
      ...data
    }
    const response = await api.post("/contacts", request)
    setAttendees([...attendees, response.data])

    // setAttendees([
    //   ...attendees,
    //   {
    //     ...data,
    //     id: new Date().getTime(),
    //   },
    // ]);
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
    };

    setAttendees(newState);
  }


  const retrieveAttendees = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAll = async () => {
      const allAttendees = await retrieveAttendees();
      if (allAttendees) setAttendees(allAttendees);
    };
    getAll();
  }, []);



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
