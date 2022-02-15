import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    // Method 3 - bind this to method in constructor (this is the best way)
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log(this);
    this.setState({
      message: "Goodbye!",
    });
  }

  // Method 4 - use arrow function for handler
  //   clickHandler = () => {
  //     console.log(this);
  //     this.setState({
  //       message: "Goodbye!",
  //     });
  //   };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Method 1 - bind this to handler in click event */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Method 2 - use arrow function in click event and call the handler */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Method 3 - bind this to handler in constructor */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
