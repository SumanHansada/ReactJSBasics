import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  /**
   * A special function that will be called whenever a new component is created.
   * Initializing state, binding event handlers, and setting up the initial UI.
   * Do not cause side-effects here, Ex - HTTP requests, DOM manipulation, etc.
   * call super(props) to override this.state and use this.props
   * @param {object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      name: "Suman",
    };
    console.log("LifecycleA constructor");
  }

  /**
   * When the state of the component depends on changes in props over time.
   * It is static, so we cannot use this keyword here.
   * Returns an object that represents the new state.
   * Do not cause side-effects here, Ex - HTTP requests, DOM manipulation, etc.
   * @param {object} props
   * @param {object} state
   * @returns {object}
   */
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  /**
   * This method is called immediately after a component and its children components is rendered to DOM.
   * Can be used to perform side-effects, Ex - HTTP requests, DOM manipulation, etc.
   * Called only once in the lifecycle of a component.
   */
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  /**
   * Only required method in class component.
   * We simply read here this.props and this.state and return the required JSX.
   * render method is pure function, for given state and props, JSX should be always the same.
   * Do not cause side-effects here, Ex - HTTP requests, DOM manipulation, etc.
   * Children component life cycle methods are also executed here.
   * @returns JSX
   */
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        LifecycleA
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
