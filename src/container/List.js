import React from 'react';
import PropTypes from 'prop-types';
import '../css/List.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editTodoList, deleteTodoList } from '../actions';

import Button from '../components/Button';

const List = props => {
  const { lists, editTodoList, deleteTodoList } = props;
  //Find list by id of url
  const selectedList = lists.find(list => list.id === props.match.params.id);
  //Func to delelte list and navigate user to landing page
  const deleteList = id => {
    deleteTodoList(id);
    //Direct user to landing page
    props.history.push('/');
  };

  return (
    <div className="List">
      <h3>{selectedList.title}</h3>
      <p className="List--content">{selectedList.content}</p>
      <Button
        className={'btn-info'}
        onClick={() =>
          editTodoList(null, selectedList.title, selectedList.content)
        }
      >
        <Link to={`/edit/${selectedList.id}`} style={{ color: '#fff' }}>
          Edit
        </Link>
      </Button>
      <Button
        className={'btn-outline-info'}
        onClick={() => deleteList(selectedList.id)}
      >
        Delete
      </Button>
    </div>
  );
};

List.propTypes = {
  lists: PropTypes.array.isRequired,
  editTodoList: PropTypes.func.isRequired,
  deleteTodoList: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { editTodoList, deleteTodoList }
)(List);
