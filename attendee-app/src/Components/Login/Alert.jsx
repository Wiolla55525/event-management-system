import Alert from "react-bootstrap/Alert";
import React, { useState } from "react";
import "./login.css";

export function AdditionalContentExample() {
  const [show, setShow] = useState(false);

  return (
    <>
      {!show ? (
        <button className="btn mb-5" onClick={() => setShow(true)}>
          Check Demo Version
        </button>
      ) : (
        <Alert
          className="sticky"
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Wanna Check Demo?</Alert.Heading>
          <p>Aww yeah? Try to enter in Log In section:</p>
          <hr />
          <p className="mb-0">
            <b>Email: </b> admin@admin.com
            <br />
            <b>Password: </b> admin
          </p>
        </Alert>
      )}
    </>
  );
}
