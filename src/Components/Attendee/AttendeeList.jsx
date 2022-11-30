import { Modals } from "./Modal";

export const Attendees = (props) => {
  return (
    <table className="table">
      <tbody className="">
        <tr className="row" key={props.info.id}>
          <td className="col">{props.info.id}</td>
          <td className="col">{props.info.firstName}</td>
          <td className="col">{props.info.email}</td>
          <td className="col">{props.info.lastName}</td>
          <td className="col">{props.info.age}</td>
          <td className="col">
            <Modals
              className="col"
              updateAttendee={props.updateAttendee}
              changeValueOfState={props.changeValueOfState}
              onEdit={() => props.onEdit(props.info.id)}
            />
            <button
              onClick={() => props.onDelete(props.info.id)}
              className="col button-delete "
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
