import { AddAttendee } from "./AddAttendee";
import Container from "react-bootstrap/Container";
import { Dashboard } from "../Dashboard/Dashboard";
import { AttendeeList } from "./AttendeeList";

export function Attendee() {
  return (
    <Container>
      <Dashboard />
      <AddAttendee />
      <AttendeeList/>
    </Container>
  );
}
