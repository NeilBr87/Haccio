import React from "react";
import { useState } from "react";
import Profilecard from "./Profilecard";

function List(props) {
  const { peopleArray } = props;
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleNameClick = (id) => {
    const person = peopleArray.find((p) => p.id === id);
    setSelectedPerson(person);
  };

  return (
    <div>
      {selectedPerson ? (
        <Profilecard person={selectedPerson} />
      ) : (
        <ul>
          {peopleArray.map((person) => (
            <li key={person.id}>
              <h3 onClick={() => handleNameClick(person.id)}>{person.Name}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;


