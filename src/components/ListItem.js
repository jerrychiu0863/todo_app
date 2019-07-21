import React from 'react';
import '../css/ListItem.css';
import { Link } from 'react-router-dom';

const ListItem = props => {
  const { lists } = props;
  return (
    <ul className="ListItem row">
      {lists.map(list => (
        <li key={list.id} className="ListItem__item col-md-4">
          <div className="ListItem__cardContainer">
            <Link
              to={`/list/${list.id}`}
              className="ListItem__cardContainer--link"
            >
              <h3 className="ListItem__cardContainer--title">{list.title}</h3>
            </Link>
            <span className="ListItem__cardContainer--date">
              {list.timeStamp}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
