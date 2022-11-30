import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AddAttendeeForm } from "./AddAttendee";

export function Modals(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    props.onEdit();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className="modal-body">
          <h3 className="">Change some information</h3>
          <AddAttendeeForm
            prop="Save"
            handleAddAttendee={props.updateAttendee}
            changeValueOfState={props.changeValueOfState}
          />
        </div>
      </Modal>
      <button className="btn-edit" onClick={handleShow}></button>
    </>
  );
}
