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
   * Dictates if the component should re-render or not.
   * By default, all the components re-render when the props they receive or state change.
   * This method can prevent the default behavior by returning false.
   * It is used for performance optimizations.
   * Do not cause side-effects here, Ex - HTTP requests, DOM manipulation, etc.
   * @param {object} nextProps
   * @param {object} nextState
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  /**
   * Called right before the virtual DOM are to be reflected in the DOM.
   * Capture some information from DOM.
   * Method will either return null or return a value.
   * Return value will be passed as a third argument to the componentDidUpdate method.
   * @param {object} prevProps
   * @param {object} prevState
   * @returns {null|any}
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  /**
   * Called after the render is finished in re-render cycle.
   * Can be used to perform side-effects, Ex - HTTP requests, DOM manipulation, etc.
   * Compare prevProps and prevState with this.props and this.state. and then make HTTP requests, DOM manipulation, etc.
   * @param {object} prevProps
   * @param {object} prevState
   * @param {null | any} snapshot
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleA componentDidUpdate");
  }

  /**
   * This method is called immediately before a component is unmounted and destroyed from the DOM.
   * Used for cancelling any network requests, removing event handlers, cancelling subscriptions, clear timer etc.
   * Do not call setState here.
   */
  componentWillUnmount() {
    console.log("LifecycleA componentWillUnmount");
  }

  /**
   * When there is any error in rendering or lifecycle method or constructor of child component.
   * @param {any} error
   */
  static getDerivedStateFromError(error) {}

  /**
   * When there is any error in rendering or lifecycle method or constructor of child component.
   * @param {any} error
   * @param {any} info
   */
  componentDidCatch(error, info) {
    console.log("LifecycleA componentDidCatch");
  }

  changeState = () => {
    this.setState({
      name: "Kumar",
    });
  };

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
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
