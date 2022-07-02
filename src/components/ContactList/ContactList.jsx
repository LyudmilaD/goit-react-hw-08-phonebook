import { useSelector } from 'react-redux';
import Contact from '../ContactElementList/ContactElementList';
import { useGetContactsQuery } from 'contactsStorage/contactsAPI';
import styles from '../Form/Form.module.css';

export const ContactList = () => {
  const { data: contacts, isSuccess } = useGetContactsQuery();
  const filter = useSelector(state => state.filter);

  const getContacts = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const items = getContacts();

  return (
    <ul className={styles.wrap}>
      {isSuccess &&
        items.map(({ id, name, phone }) => (
          <Contact key={id} id={id} name={name} number={phone} />
        ))}
      {items && items.length === 0 && (
        <span className={styles.button}> No contacts </span>
      )}
    </ul>
  );
};
export default ContactList;
