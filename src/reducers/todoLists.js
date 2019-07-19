export const todoLists = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO_LIST":
      const { title, content } = action.payload;
      return [
        {
          id: Math.random(),
          title,
          content,
          timeStamp: new Date().toLocaleString()
        },
        ...state
      ];

    case "DELETE_TODO_LIST":
      const updatedLists = state.filter(e => e.id !== action.payload);
      return updatedLists;

    default:
      return state;
  }
};

/*Update lists
function changeDesc(value, desc){
   projects.map((project) => project.value == value ? project.desc = desc : null)
}

*/
