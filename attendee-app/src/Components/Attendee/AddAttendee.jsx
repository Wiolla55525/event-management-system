import { useState } from "react";
import "./form.css";

export const AddAttendeeForm = (props) => {
  const initialValueState = props.changeValueOfState
    ? props.changeValueOfState
    : { firstName: "", lastName: "", email: "", age: "" };

  const [value, setForm] = useState({ ...initialValueState });

  function formChangeHandler(e) {
    setForm({ ...value, [e.target.id]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    props.handleAddAttendee(value);
    props.onClose && props.onClose();
    setForm({ ...initialValueState });
  }

  return (
    <div className="Container mt-4 ">
      <form onSubmit={onSubmit}>
        <div className="row justify-content-center gap-3 gap-md-0 ">
          <div className="col-sm-8 col-md-3 ">
            <input
              className="form-control "
              type="text"
              id="firstName"
              value={value.firstName}
              onChange={formChangeHandler}
              placeholder="First name"
              required
            />
          </div>
          <div className="col-sm-8 col-md-3 ">
            <input
              className="form-control "
              type="text"
              id="lastName"
              onChange={formChangeHandler}
              value={value.lastName}
              required
              placeholder="Last Name"
            />
          </div>
          <div className="col-sm-8 col-md-3">
            <input
              className="form-control "
              type="email"
              id="email"
              onChange={formChangeHandler}
              value={value.email}
              required
              placeholder="E-mail"
            />
          </div>
          <div className="col-sm-8 col-md-3">
            <input
              className="form-control "
              id="age"
              type="number"
              onChange={formChangeHandler}
              value={value.age}
              required
              placeholder="Age"
            />
          </div>
          <div className="row-4 text-center pt-md-4">
            <button type="submit" value="Submit" className=" SubmitButton">
              {props.prop}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
