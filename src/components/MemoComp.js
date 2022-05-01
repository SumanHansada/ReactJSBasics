import React from "react";

function MemoComp({ name }) {
  // React.memo is a higher order function. Kind of PureComponent for functional components
  console.log("Memo Comp render");
  return <div>Memo Component {name}</div>;
}

export default React.memo(MemoComp);
