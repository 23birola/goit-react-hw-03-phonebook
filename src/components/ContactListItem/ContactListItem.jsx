import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({contact, deleteContact}) => {
return (
    <li className={css.contactItem}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.number}>{contact.number}</span>
        <button type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>);
}
    
ContactListItem.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
};

export default ContactListItem;