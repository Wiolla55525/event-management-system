import "./form.css";

export const AddAttendee = () => {
  return (
    <div className="Container">
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Age" />
          </div>
          <button type="submit" value="Submit" className="col SubmitButton">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
