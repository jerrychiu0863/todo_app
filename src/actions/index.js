//Form actions
export const handleTitleInput = value => ({
  type: 'ON_TITLE_INPUT_CHANGE',
  payload: value
});

export const handleContentInput = value => ({
  type: 'ON_CONTENT_INPUT_CHANGE',
  payload: value
});

export const handleQueryInput = value => ({
  type: 'ON_QUERY_INPUT_CHANGE',
  payload: value
});

export const clearInputValue = () => ({
  type: 'CLEAR_INPUT_VALUE'
});
/*The End of Form Actions */

//Todo Lists actions
export const addTodoLists = (title, content) => ({
  type: 'ADD_TODO_LIST',
  payload: {
    title: title,
    content: content
  }
});

export const editTodoList = (id, title, content) => ({
  type: 'EDIT_TODO_LIST',
  payload: {
    id,
    title,
    content
  }
});

export const deleteTodoList = id => ({
  type: 'DELETE_TODO_LIST',
  payload: id
});
/*The End of Lists Actions */
