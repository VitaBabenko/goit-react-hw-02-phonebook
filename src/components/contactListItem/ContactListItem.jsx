

export const ContactListItem = ({ contacts}) => {
    return <li><span>{contacts.name}</span><span>{contacts.number}</span></li>
}