import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';


export class App extends Component {
  state = {
  contacts: [],
  filter: ''
  }
  
  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }
  

  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        
        <h2>Contacts</h2>
        <ContactList contacts={['id', 'name', 'number']} />
      </div>
  )
  }
  
};
