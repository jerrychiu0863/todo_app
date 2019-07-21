import React from 'react';
import { connect } from 'react-redux';
import { handleQueryInput } from '../actions';

import ListItem from '../components/ListItem';

const Search = props => {
  const { lists, query, handleQueryInput } = props;
  const findListsByQuery = lists.filter(list =>
    list.title.toLowerCase().includes(query) ? list : null
  );

  return (
    <div style={{ padding: '0 20px', maxHeight: '85vh', overflowY: 'auto' }}>
      <div
        className="form-group"
        style={{ maxWidth: '70%', margin: '0 auto 20px auto' }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Searching..."
          value={query}
          onChange={e => handleQueryInput(e.target.value)}
        />
      </div>
      <ListItem lists={findListsByQuery} />
    </div>
  );
};

const mapStateToProps = ({ query, lists }) => {
  return { query, lists };
};

export default connect(
  mapStateToProps,
  { handleQueryInput }
)(Search);
