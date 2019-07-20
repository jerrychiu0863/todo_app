export const title = (state = '', action) => {
  switch (action.type) {
    case 'ON_TITLE_INPUT_CHANGE':
      return action.payload;

    //Pass value to input from list
    case 'EDIT_TODO_LIST':
      return action.payload.title;

    case 'CLEAR_INPUT_VALUE':
      return '';

    default:
      return state;
  }
};

export const content = (state = '', action) => {
  switch (action.type) {
    case 'ON_CONTENT_INPUT_CHANGE':
      return action.payload;

    //Pass value to input from list
    case 'EDIT_TODO_LIST':
      return action.payload.content;
    
    case 'CLEAR_INPUT_VALUE':
        return '';

    default:
      return state;
  }
};

export const query = (state = '', action) => {
  switch (action.type) {
    case 'ON_QUERY_INPUT_CHANGE':
      return action.payload;
  
      default:
      return state;
  }
};
