const initialState = {
  employeeID: null
};

export const employeesID = (state = initialState, action) => {
  switch (action.type) {
    case "setID":
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
