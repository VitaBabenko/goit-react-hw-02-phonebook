import PropTypes from "prop-types";

export const ContactListItem = ({ contact: {name, number} }) => {
    return <div>
        <p>{name}: {number}</p>
    </div>
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired
}