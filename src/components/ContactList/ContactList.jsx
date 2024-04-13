import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul className={css.contactList}>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
      </li>
    ))}
  </ul>
);

export default ContactList;
