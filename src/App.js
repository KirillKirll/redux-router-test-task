import React from "react";
import { getEmployees, getWorklog } from "./api";
import { Route } from "react-router-dom";
import Employees from "./components/Employees.js";
import Worklog from "./components/Worklog.js";
import { loadWorklogSuccess, loadEmployeesSuccess } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.employees.loading);

  React.useEffect(() => {
    getEmployees().then((data) => dispatch(loadEmployeesSuccess(data)));
    getWorklog().then((data) => dispatch(loadWorklogSuccess(data)));
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <Route exact path="/" component={Employees} />
      <Route exact path="/worklog" component={Worklog} />
    </div>
  );
}
export default App;
