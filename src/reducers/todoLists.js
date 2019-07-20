const lists = [
  {
    id: Math.random().toString(),
    title: '123',
    content: '456',
    timeStamp: new Date().toLocaleString().substr(0, 9)
  },
  {
    id: Math.random().toString(),
    title: 'abe',
    content: 'ddd',
    timeStamp: new Date().toLocaleString().substr(0, 9)
  },
  {
    id: Math.random().toString(),
    title: 'we',
    content: 'ccc',
    timeStamp: new Date().toLocaleString().substr(0, 9)
  }
];
export const todoLists = (state = lists, action) => {
  switch (action.type) {
    case 'ADD_TODO_LIST':
      const { title, content } = action.payload;
      const newLists = [
        {
          id: Math.random().toString(),
          title,
          content,
          timeStamp: new Date().toLocaleString().substr(0, 9)
        },
        ...state
      ];
      return newLists;

    case 'EDIT_TODO_LIST':
      const { id } = action.payload;
      //Find list and overwrite the value
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
