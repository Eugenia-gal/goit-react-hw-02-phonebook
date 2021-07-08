import React, { Component } from 'react';
import './App.css';
import initialContacts from 'Data/contacts.json';
import Form from 'Components/Form';
import shortid from 'shortid';
import ContactList from 'Components/ContactList';
import Filter from 'Components/Filter';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const newContact = { id: shortid.generate(), ...data };
    const contactNames = contacts.map(contact => contact.name);
    const isRepeat = contactNames.indexOf(data.name) !== -1;

    if (isRepeat) {
      alert(`${data.name} is already in Contacts`);
      return;
    } else {
      this.setState(oldState => ({
        contacts: [newContact, ...oldState.contacts],
      }));
    }
  };

  filterContacts = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterContacts} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
