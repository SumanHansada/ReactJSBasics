import React from "react";

// function FRInput() {
//   return <div>FRInput</div>;
// }

/**
 * Use forwardRef to receive ref from parent component and attach it to the elements of child component
 * This can be used to ref to child component from parent component,
 * if child component is functional component
 */

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
