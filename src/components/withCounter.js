import React from "react";

/**
 * Higher Order Component
 * A pattern where a function takes a component as an argument and returns a new enhanced component
 * It is also used to share functionality between common component without repeating the code
 * cont NewComponent = higherOrderComponent(OriginalComponent)
 * cont EnhancedComponent = higherOrderComponent(OriginalComponent)
 *
 * const IronMan = withSuit(TonyStark)
 *
 * We can also pass parameter to HOC Component as a second argument
 * const IronMan = withSuit(TonyStark, v23);
 */

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
