import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState is asynchronous
    // this.setState(stateObject, callback)
    /**
     * Always make use of setState to update the state, and never modify the state directly.
     */
    /** Whenever you need to execute some code after the state has been changed,
     * do not place that code right after the setState method.
     * Instead place that code within callback function which passed as second parameter to setState method.
     * This is because setState is asynchronous and it will not execute the code right away.
     */
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );
    /**
     * When you have to update state based on previous state value,
     * Pass in a function to setState as an argument with prevState and props.
     */
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment By 5</button>
      </div>
    );
  }
}

export default Counter;
