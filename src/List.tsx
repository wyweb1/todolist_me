import React from "react";
import { todos } from "./model";
// import {Propstodos}from 'model.ts'
interface Props {
  todos: typeof import("./model").todos;
  deleteItem: (e: any) => void;
  deleteItemdelay: (e: any) => void;
  index: number;
}
interface State {
  // id: number;
  // index:number
}
class List extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todos: todos
    };
  }
  deleteItem(index: number, e) {
    // console.log(a, e.target);
    this.props.deleteItem(index);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, index: number) => {
            return (
              <li key={index}>
                <span
                  style={{
                    cursor: "pointer",
                    textDecoration: todo.done ? "line-through" : "none"
                  }}
                  // TODO: click to toggle done
                >
                  {index}
                  {todo.text}
                </span>{" "}
                <button onClick={this.deleteItem.bind(this, index)}>
                  delete
                </button>{" "}
                <button
                  onClick={this.props.deleteItemdelay}
                  // TODO: click to async delete in 1 second
                >
                  async delete (1 second delay)
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
