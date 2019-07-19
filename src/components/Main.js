import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTodoList } from "../actions";

class Main extends Component {
  render() {
    console.log(this.props.state);
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {this.props.state.lists.map(list => (
            <li key={list.id}>
              <span>{list.title}</span>
              <span>{list.timeStamp}</span>
              <Link to={`/edit/${list.id}`}>Edit</Link>
              <button onClick={() => this.props.deleteTodoList(list.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

export default connect(
  mapStateToProps,
  { deleteTodoList }
)(Main);
