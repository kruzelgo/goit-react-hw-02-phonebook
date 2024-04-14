import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
    setNumber('');
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#5a8f99',
        fontWeight: 'bolder',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        onNameChange={handleNameChange}
        number={number}
        onNumberChange={handleNumberChange}
        onSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

// export default App;

// export const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (name.trim() === '') {
//       alert('Please enter a valid name.');
//       return;
//     }

//     const newContact = {
//       id: Date.now().toString(),
//       name,
//     };

//     setContacts(prevContacts => [...prevContacts, newContact]);
//     setName('');
//   };

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#5a8f99',
//         fontWeight: 'bolder',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <ContactForm
//         name={name}
//         onNameChange={handleNameChange}
//         onSubmit={handleSubmit}
//       />
//       <h2>Contacts</h2>
//       <ContactList contacts={contacts} />
//     </div>
//   );
// };
// export const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [name, setName] = useState('');
//   const [filter, setFilter] = useState('');

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (name.trim() === '') {
//       alert('Please enter a valid name.');
//       return;
//     }

//     const newContact = {
//       id: nanoid(),
//       name,
//     };

//     setContacts(prevContacts => [...prevContacts, newContact]);
//     setName('');
//   };

//   const handleFilterChange = event => {
//     setFilter(event.target.value);
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
