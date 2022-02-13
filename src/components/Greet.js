import React from "react";

const Greet = (props) => {
  // You cannot change props under any circumstances (Immutable)
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
