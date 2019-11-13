import React from "react";
// import { todos } from "./model";

interface Props {
  inputChange: (e: string) => void;
  addItem: () => void;
}
interface State {
  text: string;
}
class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  inputChange = (
    e: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => {
    this.props.inputChange(e.target.value);
    console.log(e.target.value);
  };
  render() {
    return (
      <div>
        <input onChange={this.inputChange} />
        <button onClick={this.props.addItem}>add</button>
      </div>
    );
  }
}

export default Form;
