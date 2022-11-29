import { useState } from "react";
import "./form.css";

export const AddAttendeeForm = (props) => {
  const initialValueState = props.changeValueOfState
    ? props.changeValueOfState
    : { firstName: "", email: "", lastName: "", age: "" };

  const [value, setForm] = useState({ ...initialValueState });

  function formChangeHandler(e) {
    setForm({ ...value, [e.target.id]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    props.handleAddAttendee(value);
    setForm({ ...initialValueState });
  }

  return (
    <div className="Container my-4">
      <form onSubmit={onSubmit}>
        <div className="row align-items-center">
          <div className="col">
            <input
              className="form-control "
              type="text"
              id="firstName"
              value={value.firstName}
              onChange={formChangeHandler}
              placeholder="Friends name"
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control "
              type="text"
              id="email"
              onChange={formChangeHandler}
              value={value.email}
              required
              placeholder="E-mail"
            />
          </div>
          <div className="col">
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
          <div className="col">
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
          <div className="col">
            <button type="submit" value="Submit" className=" SubmitButton">
              {props.prop}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
