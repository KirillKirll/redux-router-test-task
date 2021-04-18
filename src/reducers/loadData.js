const initialState = {
  employees: [],
  worklog: [],
  loading: true
};

export const employees = (state = initialState, action) => {
  switch (action.type) {
    case "loadEmployees":
      return { ...state, employees: action.payload };
    case "loadWorklog":
      return { ...state, worklog: action.payload, loading: false };
    default:
      return state;
  }
};
