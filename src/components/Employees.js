import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeID } from "../actions";

function Employees() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);

  const sortByName = (a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  };

  function convertDate(birthDate) {
    function format(number) {
      return number < 10 ? "0" + number : number;
    }
    const date = new Date(birthDate);
    return [
      format(date.getDate()),
      format(date.getMonth() + 1),
      date.getFullYear()
    ].join(".");
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>ФИО</th>
            <th>ID</th>
            <th>Дата рождения</th>
          </tr>
          {employees.sort(sortByName).map((el, id) => {
            return (
              <tr key={id}>
                <td>
                  <p onClick={() => dispatch(setEmployeeID(el.id))}>
                    <Link to="/worklog">{`${el.lastName} ${el.firstName} ${el.middleName}`}</Link>
                  </p>
                </td>
                <td>{el.id}</td>
                <td>{convertDate(el.birthDate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Employees;
