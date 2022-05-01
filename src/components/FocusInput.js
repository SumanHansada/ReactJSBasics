import React, { Component } from "react";
import Input from "./Input";

/**
 * In special circumstances, if you need a ref to child component from parent component,
 * It is definitely possible.
 * The component however has to be class component.
 * Refs cannot be attached to a functional component.
 */
class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
