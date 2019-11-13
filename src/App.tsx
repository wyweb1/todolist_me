import React from "react";
import { todos, createID } from "./model";
import List from "./List";
import Form from "./Form";

const completedTodos = 0;
const totalTodos = todos.length;
interface Propsapp {
  index: number;
}
interface Stateapp {
  todos: typeof import("./model").todos;
  text: string;
  id: number;
}
class App extends React.PureComponent<Propsapp, Stateapp> {
  constructor(props: Propsapp) {
    super(props);
    this.state = {
      todos: todos,
      text: "",
      id: createID()
    };
  }
  // change input
  inputChange = (e: string) => {
    this.setState({ text: e });
  };
  // add list
  addItem = () => {
    // const {todos} = this.state;
    const newtodos = [
      ...this.state.todos,
      { text: this.state.text, done: false, id: createID() }
    ];
    this.setState({
      todos: newtodos
    });
    // console.log(this.state.id);
  };
  // delete
  deleteItem = (index: number) => {
    console.log(index);

    const { todos } = this.state;
    const newtodos2 = todos.concat();
    newtodos2.splice(index, 1);
    this.setState({
      todos: newtodos2
    });
    // if(id)
    // newtodos2[2] = { text: "XIAOM", done: false };
    // console.log(newtodos2 === this.state.todos);
    // delay to delete
  };
  deleteItemdelay = () => {
    setTimeout(this.deleteItem, 200);
  };
  render() {
    return (
      <div>
        {completedTodos} of {totalTodos} todos are done!
        <List
          deleteItemdelay={this.deleteItemdelay}
          deleteItem={this.deleteItem}
          todos={this.state.todos}
        />
        <Form addItem={this.addItem} inputChange={this.inputChange} />
      </div>
    );
  }
}

export default App;
