import React from 'react';
import { connect } from 'react-redux';
import {
  handleTitleInput,
  handleContentInput,
  addTodoLists,
  clearInputValue
} from '../actions';

import Button from '../components/Button';

const Add = props => {
  const {
    title,
    content,
    handleTitleInput,
    handleContentInput,
    addTodoLists,
    clearInputValue
  } = props;

  const onFormSubmit = e => {
    e.preventDefault();
    addTodoLists(title, content);
    clearInputValue();
  };

  return (
    <form onSubmit={onFormSubmit} style={{ maxWidth: '70%', margin: '0 auto' }}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Title"
          value={title}
          onChange={e => handleTitleInput(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Todo Lists</label>
        <textarea
          style={{ resize: 'none' }}
          type="text"
          className="form-control"
          placeholder="Enter Todo Lists"
          value={content}
          rows="10"
          onChange={e => handleContentInput(e.target.value)}
        />
      </div>
      <Button className={'btn-info'} onClick={onFormSubmit}>
        Add Todo List
      </Button>
    </form>
  );
};

const mapStateToProps = ({ title, content }) => {
  return { title, content };
};

export default connect(
  mapStateToProps,
  { handleTitleInput, handleContentInput, addTodoLists, clearInputValue }
)(Add);
