import React from 'react';
import CustomContactList from './ContactList.styled';

function ContactList({ contacts }) {
  return (
    <CustomContactList>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </CustomContactList>
  );
}

export default ContactList;
