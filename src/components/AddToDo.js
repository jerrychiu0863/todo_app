import React, { Component } from "react";
import { connect } from "react-redux";
import { handleTitleInput, handleContentInput, addTodoLists } from "../actions";

class AddToDo extends Component {
  onButtonSubmit = e => {
    e.preventDefault();
    this.props.addTodoLists(this.props.title, this.props.content);
  };

  render() {
    //console.log(`${this.props.title} + ${this.props.content}`);
    return (
      <form style={{ width: "500px", margin: "0 auto" }}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            value={this.props.title}
            onChange={e => this.props.handleTitleInput(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Todo Lists</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Lists"
            value={this.props.content}
            onChange={e => this.props.handleContentInput(e.target.value)}
          />
        </div>
        <button
          onClick={this.onButtonSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Add List
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ title, content }) => {
  return { title, content };
};

export default connect(
  mapStateToProps,
  { handleTitleInput, handleContentInput, addTodoLists }
)(AddToDo);
