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
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
