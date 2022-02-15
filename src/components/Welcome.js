import React, { Component } from "react";

export class Welcome extends Component {
  // You cannot change props under any circumstances (Immutable)
  // In class component, you have to use this.props to access props
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
  render() {
    const { name, heroName } = this.props;
    return (
      <div>
        <h1>
          Welcome {name} a.k.a {heroName}
        </h1>
      </div>
    );
  }
}
