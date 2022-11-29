import { AddAttendeeForm } from "./AddAttendee";
import Container from "react-bootstrap/Container";
import { Dashboard } from "../Dashboard/Dashboard";
import { Attendees } from "./AttendeeList";
import { useState, useEffect } from "react";


export function Attendee() {
  const [attendees, setAttendees] = useState([]);

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
          />
        </div>
      </div>

      <div className=" row d-flex justify-content-center">
      <h2 className="tableName py-4">Attendee list:</h2>
        {attendees.length > 0 ? attendees : (<div className="text-center">No attendees found</div>)}
      </div>
    </Container>
  );
}
