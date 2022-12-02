import { Attendees } from "./AttendeeList";
import { AddAttendeeForm } from "./AddAttendee";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import axios from "axios";

export function Attendee() {
  // const [attendees, setAttendees] = useState(getSavedData());
  const [editState, setEdit] = useState({});
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    axios.get("/users").then((res) => {
      // console.log(res);
      setAttendees(res.data);
    });
  }, []);

  // function getSavedData() {
  //   const savedData = localStorage.getItem("Attendee");
  //   const res = JSON.parse(savedData);
  //   return res || [];
  // }

  // useEffect(() => {
  //   localStorage.setItem("Attendee", JSON.stringify(attendees));
  // }, [attendees]);

  async function handleDeleteAttendee(id) {
    axios.delete(`/users/${id}`);
    setAttendees(attendees.filter((attendee) => attendee.id !== id));
  }

  async function handleAddAttendee(data, id) {
    console.log(data);

    const request = {
      ...data,
    };

    const response = await axios.post(`/users`, request);
    console.log(response);
    setAttendees([...attendees, response.data]);

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

  async function updateAttendee(attendee) {
    axios.put(`/users/${attendee.id}`, attendee);
    // const { id } = response.data;
      const editedUsers = attendees.map((item) => {
      //   return item.id === attendee.id ? { ...response.data } : attendee;
      // })
        if (item.id === attendee.id) {
          console.log({...attendee})
          return {...attendee}
        }
        return item
      })
      console.log(editedUsers)
      setAttendees(editedUsers)
  }
  // const newIndex = attendees.findIndex(
  //   (attendee) => attendee.id === changeInfo.id
  // );

  // const newState = [...attendees];
  // newState[newIndex] = {
  //   ...changeInfo,
  // };

  // setAttendees(newState);

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
