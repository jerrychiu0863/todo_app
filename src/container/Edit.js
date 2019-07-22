import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  handleTitleInput,
  handleContentInput,
  editTodoList,
  clearInputValue
} from '../actions';

import Button from '../components/Button';

const Edit = props => {
  const { title, content, handleTitleInput, handleContentInput } = props;
  
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
      <Button className={'btn-info'} onClick={onEditBtnSubmit}>
        Edit
      </Button>
    </form>
  );
};

Edit.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleTitleInput: PropTypes.func.isRequired,
  handleContentInput: PropTypes.func.isRequired,
  editTodoList: PropTypes.func.isRequired,
  clearInputValue: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { handleTitleInput, handleContentInput, editTodoList, clearInputValue }
)(Edit);
