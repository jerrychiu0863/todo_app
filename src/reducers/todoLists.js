import cuid from 'cuid';

export const todoLists = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      const { title, content } = action.payload;
      const newLists = [
        {
          id: cuid(),
          title,
          content,
          timeStamp: new Date().toLocaleString().substr(0, 9) //Get MM/DD/Year
        },
        ...state
      ];
      return newLists;

    case 'EDIT_TODO_LIST':
      const { id } = action.payload;
      //Find list by id and overwrite the title and content
      const editedLists = state.filter(list => {
        if (list.id === id) {
          const { title, content } = action.payload;
          list.title = title;
          list.content = content;
        }
        return list;
      });
      return editedLists;

    case 'DELETE_TODO_LIST':
      //Remove the list with the same id
      const updatedLists = state.filter(list => list.id !== action.payload);
      return updatedLists;

    default:
      return state;
  }
};
