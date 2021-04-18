export const loadEmployeesSuccess = (data) => ({
  type: "loadEmployees",
  payload: data
});

export const loadWorklogSuccess = (data) => ({
  type: "loadWorklog",
  payload: data
});

export const setEmployeeID = (number) => ({
  type: "setID",
  payload: number
});

export const setFilteredWorklog = (data) => ({
  type: "filteredWorklog",
  payload: data
});
