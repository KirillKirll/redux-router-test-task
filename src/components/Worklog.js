import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredWorklog } from "../actions";

function Worklog() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.employeesID.id);
  const worklog = useSelector((state) => state.employees.worklog);
  const employees = useSelector((state) => state.employees.employees);
  const filteredWorklogList = useSelector(
    (state) => state.worklog.filteredWorklog
  );

  React.useEffect(() => {
    dispatch(
      setFilteredWorklog(
        worklog.filter((option) => {
          if (id === option.employee_id) return true;
          return false;
        })
      )
    );
  }, []);

  const employeeName = (id) => {
    const sortedName = employees.sort((a, b) => a.id - b.id);
    const nameEl = sortedName.map(
      (el) => `${el.lastName} ${el.firstName} ${el.middleName}`
    );
    return nameEl[id - 1];
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>ФИО</th>
            <th>Начало смены</th>
            <th>Конец смены</th>
          </tr>
          {filteredWorklogList.map((el, id) => {
            return (
              <tr key={id}>
                <td>
                  <p>{employeeName(el.employee_id)}</p>
                </td>
                <td>{el.from}</td>
                <td>{el.to}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Worklog;
