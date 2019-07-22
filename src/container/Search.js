import React from 'react';
import PropTypes from 'prop-types';
import '../css/Search.css';
import { connect } from 'react-redux';
import { handleQueryInput } from '../actions';

import ListItem from '../components/ListItem';

const Search = props => {
  const { lists, query, handleQueryInput } = props;
  
  const findListsByQuery = lists.filter(list =>
    list.title.toLowerCase().includes(query) ? list : null
  );

  return (
    <div className="Search">
      <div className="Search--input form-group">
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

Search.propTypes = {
  query: PropTypes.string,
  lists: PropTypes.array.isRequired,
  handleQueryInput: PropTypes.func.isRequired
};

const mapStateToProps = ({ query, lists }) => {
  return { query, lists };
};

export default connect(
  mapStateToProps,
  { handleQueryInput }
)(Search);
