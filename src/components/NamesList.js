import React from "react";
import Person from "./Person";

function NamesList() {
  const names = ["Bruce", "Clark", "Diana"];
  // Use index as keys only when (All 3 must be satisfied)
  // - The items in your list do not have unique id
  // - The list is static list and will not change
  // - The list will never be reordered or filtered
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  // key is a special string attribute that you need to include when creating lists of elements.
  // key prop is not passed to the child component.
  // keys help React identify which items have changed, are added, or are removed.
  // keys help in efficient update of the user interface.
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{nameList}</div>;
}

export default NamesList;
