import { Attendees } from "./AttendeeList";
import { AddAttendeeForm } from "./AddAttendee";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";

export function Attendee() {
  function getSavedData() {
    const savedData = localStorage.getItem("Attendee");
    const res = JSON.parse(savedData);
    return res || [];
  }

  const [attendees, setAttendees] = useState(getSavedData());

  useEffect(() => {
    localStorage.setItem("Attendee", JSON.stringify(attendees));
  }, [attendees]);

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



  const addAttendee = attendees.map((attendee) => (
    <div key={attendee.id} className=" my-1 align">
      <Attendees
        key={attendee.id}
        info={attendee}
        onDelete={handleDeleteAttendee}
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
