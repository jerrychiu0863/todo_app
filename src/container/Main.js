import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';

const Main = props => {
  const { lists } = props;

  return (
    <div style={{ padding: '0 20px', maxHeight: '85vh', overflowY: 'auto' }}>
      <h1>Todo Lists</h1>
      {lists.length !== 0 ? (
        <ListItem lists={lists} />
      ) : (
        <p>Add Your Todo Lists!</p>
      )}
    </div>
  );
};

Main.propTypes = {
  lists: PropTypes.array.isRequired
};

const mapStateToProps = ({ lists }) => {
  return { lists };
};

export default connect(
  mapStateToProps,
  null
)(Main);
