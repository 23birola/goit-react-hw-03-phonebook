import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import css from './App.module.css';

export default class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

   componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts !== nextContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const id = uuidv4();

    const existingContact = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (existingContact) { return toast.error(`${name} is already in contacts!!!`) };

    this.setState((prevState) => ({ contacts: [...prevState.contacts, {id, name, number}] 
    }))

    e.target.elements.name.value = "";
    e.target.elements.number.value = "";
  }

  handleChange = (e) => {
    const filterName = e.target.value.toLowerCase();
    console.log(filterName);
    this.setState({ filter: filterName });
  }

  handleFilter = () => {
    if (!this.state.filter) { return }
    else {
      return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter));
    }
  }

  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => {
      return {
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }})
  }

  render() {
    const selectedContacts = this.handleFilter();

    return (
      <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.onSubmit}/>
        
      <h2>Contacts</h2>
      <Filter filterByName={this.handleChange}/>
        {!this.state.filter && <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact}/>}
        {this.state.filter && <ContactList contacts={selectedContacts} deleteContact={this.deleteContact}/>}
      <Toaster/>
      </div>
    )}
}
