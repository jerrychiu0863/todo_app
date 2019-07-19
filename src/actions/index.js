//Input actions
export const handleTitleInput = value => ({
  type: "ON_TITLE_INPUT_CHANGE",
  payload: value
});

export const handleContentInput = value => ({
  type: "ON_CONTENT_INPUT_CHANGE",
  payload: value
});

//Todo Lists actions
export const addTodoLists = (title, content) => ({
  type: "ADD_TODO_LIST",
  payload: {
    title: title,
    content: content,
  }
});

export const deleteTodoList = (id) => ({
  type: "DELETE_TODO_LIST",
  payload: id
});
