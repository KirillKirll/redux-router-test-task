import { employeesID } from "./employeesID";
import { filterWorklogReducer } from "./worklogReducer";
import { employees } from "./loadData";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  employeesID: employeesID,
  worklog: filterWorklogReducer,
  employees: employees
});
