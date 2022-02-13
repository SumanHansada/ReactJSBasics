import React from "react";

const Greet = (props) => {
  // You cannot change props under any circumstances (Immutable)
  // In function component, you have to use props to access props
  /**
   * props
   * - props get passed to the component
   * - props are immutable (cannot be changed)
   * - props (Functional Component)
   * - this.props (Class Component)
   */

  /**
   * state
   * - state is a managed within the component
   * - state is mutable (can be changed)
   * - use useState Hook to manage state (Functional Component)
   * - use this.state to access state (Class Component)
   */
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
