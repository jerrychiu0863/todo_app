import React from 'react';
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
    <div
      style={{
        maxWidth: '30vw',
        margin: '0 auto',
        border: '1px solid rgba(0,0,0,.2)',
        padding: '20px',
        borderRadius: '3px'
      }}
    >
      <h3>{selectedList.title}</h3>
      <p style={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
        {selectedList.content}
      </p>
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

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { editTodoList, deleteTodoList }
)(List);
