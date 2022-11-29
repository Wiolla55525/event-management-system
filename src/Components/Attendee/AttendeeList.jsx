
export const Attendees = (props) => {
  return (
    <table className="table">
      <tbody className="">
        <tr className="row">
          <td className="col">{props.info.firstName}</td>
          <td className="col">{props.info.email}</td>
          <td className="col">{props.info.lastName}</td>
          <td className="col">{props.info.age}</td>
          <td className="col">
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
