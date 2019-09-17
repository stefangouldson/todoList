import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], text: "" };
    this.removeItem = this.removeItem.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    this.setState({ todos: [this.state.text, ...this.state.todos], text: "" });
  }

  updateValue(e) {
    this.setState({ text: [e.target.value] });
  }
  removeItem(index) {
    const todos = this.state.todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    this.setState({ todos });
  }
  render() {
    return (
      <div className="page">
      <div className="content">
      <h1 className="title">To do list</h1>
        <form onSubmit={e => this.addTodo(e)}>
          <input
            placeholder="Type here"
            value={this.state.text}
            onChange={e => {
              this.updateValue(e);
            }}
          />
          <button className="button" type="submit">Add to list</button>
        </form>
        <TodoList todos={this.state.todos} removeItem={this.removeItem} />
      </div>
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return (
            <div>
              <li key={todo}>{todo}</li>
              <button className="removeButton"
                onClick={e => {
                  this.props.removeItem(index);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todos />, rootElement);



