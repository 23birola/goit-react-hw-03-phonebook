import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  return <form onSubmit={onSubmit} className={css.contactForm}>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      className={css.formInput}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
       required
      />
    <label htmlFor="number">Number</label>
    <input
     type="tel"
     name="number"
     id="number"
     className={css.formInput}
     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
     required
    />
    <button type="submit">Add contact</button>
    </form>
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
export default ContactForm;