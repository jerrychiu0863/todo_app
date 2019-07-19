export const title = (state = "", action) => {
  switch (action.type) {
    case "ON_TITLE_INPUT_CHANGE":
      return action.payload;

    default:
      return state;
  }
};

export const content = (state = "", action) => {
  switch (action.type) {
    case "ON_CONTENT_INPUT_CHANGE":
      return action.payload;

    default:
      return state;
  }
};
