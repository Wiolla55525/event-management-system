import { Attendees } from "./AttendeeList";
import { AddAttendeeForm } from "./AddAttendee";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import axios from "axios";
import { Heading } from "../Heading/Heading";
import { Dashboard } from "../Dashboard/Dashboard";
// import {  } from "sqlite3";

// const db = ({
//   name: "users",
// });

export function Attendee() {
  // function getSavedData() {
  //   const savedData = localStorage.getItem("Attendee");
  //   const res = JSON.parse(savedData);
  //   return res || [];
  // }
  // const [attendees, setAttendees] = useState(getSavedData());

  // useEffect(() => {
  //   localStorage.setItem("Attendee", JSON.stringify(attendees));
  // }, [attendees]);

  const [editState, setEdit] = useState({});
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    axios.get("/users").then((res) => {
      setAttendees(res.data);
    });
  }, []);

  async function handleDeleteAttendee(id) {
    axios.delete(`/users/${id}`);
    setAttendees(attendees.filter((attendee) => attendee.id !== id));
  }

  async function handleAddAttendee(data, id) {
    const request = {
      ...data,
    };

    await axios.post(`/users`, request);
    setAttendees([...attendees, data]);
  }

  function handleEditAttendee(id) {
    setEdit(attendees.filter((attendee) => attendee.id === id)[0]);
  }

  async function updateAttendee(attendee) {
    axios.patch(`/users/`, attendee);
    const editedUsers = attendees.map((item) => {
      if (item.id === attendee.id) {
        return { ...attendee };
      }
      return item;
    });
    setAttendees(editedUsers);
  }

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
      <Dashboard />

      <div className=" row d-flex justify-content-center">
        <div className="p-5 mb-5 mt-4 col Container-bigger">
          <h2 className="pb-3 text-sm-center text-md-start ">
            Create Attendee
          </h2>
          <AddAttendeeForm
            prop="Submit"
            handleAddAttendee={(value, id) => handleAddAttendee(value, id)}
          />
        </div>
      </div>

      <div className=" row d-flex justify-content-center">
        <h2 className="tableName py-4">Attendee list:</h2>
        {attendees.length > 0 ? (
          <>
            <Heading />
            <>{addAttendee}</>
          </>
        ) : (
          <div className="text-center">No attendees found</div>
        )}
      </div>
    </Container>
  );
}
