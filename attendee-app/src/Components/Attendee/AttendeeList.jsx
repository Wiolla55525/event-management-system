import { Modals } from "./Modal";

export const Attendees = (props) => {
  return (
    <table className="table table-hover">
      <tbody className="">
        <tr className="row" key={props.info.id}>
          <td className="col-xs-12 col-md-2">{props.info.id}</td>
          <td className="col-xs-12 col-md-2">{props.info.firstName}</td>
          <td className="col-xs-12 col-md-2">{props.info.lastName}</td>
          <td className="col-xs-12 col-md-2">{props.info.email}</td>
          <td className="col-xs-12 col-md-2">{props.info.age}</td>
          <td className="col-xs-12 col-md-2">
            <Modals
              updateAttendee={props.updateAttendee}
              changeValueOfState={props.changeValueOfState}
              onEdit={() => props.onEdit(props.info.id)}
            />
            <button
              onClick={() => props.onDelete(props.info.id)}
              className=" button-delete "
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
