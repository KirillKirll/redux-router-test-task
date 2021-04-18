const initialState = {
  filteredWorklog: []
};

export const filterWorklogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filteredWorklog":
      return { ...state, filteredWorklog: action.payload };
    default:
      return state;
  }
};
