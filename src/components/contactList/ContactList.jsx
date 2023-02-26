import PropTypes from "prop-types";
import { ContactListItem } from '../contactListItem/ContactListItem';

export const ContactList = ({ contacts }) => {
    return <ul>
        {contacts.map(contact => {
            return <li key={contact.id}>
                <ContactListItem contact={contact} />
            </li>
        })}
    </ul>
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
id: PropTypes.string.isRequired
    })).isRequired
}