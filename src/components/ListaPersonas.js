import React from 'react';
import personsServices from '../services/person'

const ListaPersonas = ({ persons, setPersons }) => {
  const label = "eliminar"
  
  const handleDeletePerson = (id) => {
    window.confirm("Deseas eliminar el numero?")
    personsServices
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id));
    })
    .catch(error => {
        console.error('Error deleting person:', error);
    });   
};

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.phone} <button onClick={() => handleDeletePerson(person.id)}>{label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPersonas;