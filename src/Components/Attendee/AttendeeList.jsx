export const AttendeeList = () => {
  return (
    <>
      <h2 className="tableName py-4">Attendee list</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Email</th>
            <th scope="col">Last Name</th>
            <th scope="col" colSpan="2">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Augustina</th>
            <td>august@gmail.com</td>
            <td>Drogba</td>
            <td>28</td>
            <td>
              <button className="col btn-edit"></button>
              <button className="col btn-delete"></button>
            </td>
          </tr>

          <tr>
            <th scope="row">Benas</th>
            <td>benu@gmail.com</td>
            <td>Juozapavicius</td>
            <td>12</td>
            <td>
              <button className="col btn-edit"></button>
              <button className="col btn-delete"></button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
