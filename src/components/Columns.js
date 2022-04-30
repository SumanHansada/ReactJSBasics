import React from "react";

function Columns() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];
  // No key attribute in <></> Fragment syntax
  // But key can be used in <React.Fragment key={}></React.Fragment>
  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <td>{item.name}</td>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Suman</td>
    </>
  );
}

export default Columns;
