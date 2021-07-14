import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import ContactListItem from "../ContactListItem/ContactListItem";


const ContactList = ({ contacts, deleteContact }) => {
  return (
      <ul className={css.contactList}>
        {contacts.map(contact =>
          <ContactListItem contact={contact} key={contact.id} deleteContact={deleteContact}/>)}
      </ul>);
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
};

export default ContactList;