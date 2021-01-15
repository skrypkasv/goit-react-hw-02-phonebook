import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'id-1',
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: 'id-2',
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      {
        id: 'id-3',
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: 'id-4',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
    filter: '',
  };

  addContact = state => {
    const { name, number } = state;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  clearContact = contactId => {
    console.log(contactId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          ({ id }) => id !== contactId,
        ),
      };
    });
  };

  updateFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className="container">
        <h2>Phonebook</h2>

        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>

        <Filter
          value={filter}
          onUpdateFilter={this.updateFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onClearContact={this.clearContact}
        />
      </div>
    );
  }
}

export default App;
