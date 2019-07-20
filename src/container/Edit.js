import React from 'react';
import { connect } from 'react-redux';
import {
  handleTitleInput,
  handleContentInput,
  editTodoList,
  clearInputValue
} from '../actions';

import Button from '../components/Button';

const Edit = props => {
  const onEditBtnSubmit = e => {
    e.preventDefault();
    //Get id from url
    const id = props.match.params.id;
    const title = props.title;
    const content = props.content;
    props.editTodoList(id, title, content);
    props.clearInputValue();
  };

  return (
    <form style={{ maxWidth: '70%', margin: '0 auto' }}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Title"
          value={props.title}
          onChange={e => props.handleTitleInput(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Todo Lists</label>
        <textarea
          style={{ resize: 'none' }}
          type="text"
          className="form-control"
          placeholder="Enter Todo Lists"
          value={props.content}
          rows="10"
          onChange={e => props.handleContentInput(e.target.value)}
        />
      </div>
      <Button className={'btn-info'} onClick={onEditBtnSubmit}>
        Edit
      </Button>
    </form>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { handleTitleInput, handleContentInput, editTodoList, clearInputValue }
)(Edit);
