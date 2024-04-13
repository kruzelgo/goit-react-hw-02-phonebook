import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
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

    if (name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
    setNumber('');
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
      <ContactList contacts={filteredContacts} />
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
