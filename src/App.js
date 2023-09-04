import React, { useState } from 'react'
import Filtro from './components/Filter'
import FormularioAgregarPersona from './components/FormularioAgregarPersona'
import ListaPersonas from './components/ListaPersonas'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1, phone: "3002588455" },
    { name: 'Arto Porras', id: 2, phone: "3002588455" },
    { name: 'Lila Hellas', id: 3, phone: "3002588455" },
    { name: 'pedro Hellas', id: 4, phone: "3002588455" }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const nombreExistente = persons.find((person) => person.name === newName);

    if (nombreExistente) {
      window.alert(`${newName} ya existe en la lista de telefonos`);
    } else {
      const personObject = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1,
      }

      setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewPhone('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
  }

  const personsToShow = searchName === ''
  ? persons
  : persons.filter((person) => person.name.toLowerCase() === searchName.toLowerCase()); 

  return (
    <div>
       <Filtro value={searchName} onChange={handleSearchName} />
      <h2>Phonebook</h2>
      <FormularioAgregarPersona
        onSubmit={addName}
        name={newName}
        phone={newPhone}
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <ListaPersonas persons={personsToShow} />
    </div>
  )
}

export default App