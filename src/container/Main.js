import React from 'react';
import { connect } from 'react-redux';
import { deleteTodoList, editTodoList } from '../actions';

import ListItem from '../components/ListItem';

const Main = props => {
  const { lists, editTodoList, deleteTodoList } = props;

  return (
    <div style={{ padding: '0 20px' }}>
      <h1>Todo Lists</h1>
      {lists.length !== 0 ? (
        <ListItem
          lists={lists}
          editTodoList={editTodoList}
          deleteTodoList={deleteTodoList}
        />
      ) : (
        <p>Add Your Todo Lists!</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ lists }) => {
  return { lists };
};

export default connect(
  mapStateToProps,
  { deleteTodoList, editTodoList }
)(Main);
