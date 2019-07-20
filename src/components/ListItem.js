import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = props => {
  const { lists } = props;
  return (
    <ul
      className="row"
      style={{ listStyle: 'none', padding: '0', margin: '0' }}
    >
      {lists.map(list => (
        <li
          key={list.id}
          className="col-md-4"
          style={{
            padding: '5px',
            paddingRight: '10px',
            textAlign: 'left'
          }}
        >
          <div
            style={{
              borderTop: '5px solid lightblue',
              borderRadius: '3px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
              padding: '10px',
              minHeight: '150px',
              display: 'block',
              position: 'relative',
              background: '#fff'
            }}
          >
            <Link to={`/list/${list.id}`} style={{ textDecoration: 'none' }}>
              <h3 style={{ marginBottom: '30px', color: '#333' }}>
                {list.title}
              </h3>
            </Link>
            <span
              style={{
                fontSize: '14px',
                color: '#666',
                position: 'absolute',
                bottom: '10px',
                right: '10px'
              }}
            >
              {list.timeStamp}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
