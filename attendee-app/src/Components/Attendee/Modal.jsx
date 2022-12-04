import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { AddAttendeeForm } from "./AddAttendee";
import "./form.css";

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
          <Modal.Header closeButton>
            <Modal.Title>Change some information: </Modal.Title>
          </Modal.Header>
          <AddAttendeeForm
            prop="Save"
            onClose={handleClose}
            handleAddAttendee={props.updateAttendee}
            changeValueOfState={props.changeValueOfState}
          />
        </div>
      </Modal>
      <button className="btn-edit" onClick={handleShow}></button>
    </>
  );
}
