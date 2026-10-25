function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <p className="contact-name">{contact.name}</p>
        <p>{contact.email}</p>
        {contact.phone && <p>{contact.phone}</p>}
      </div>
      <button
        type="button"
        className="btn btn-delete"
        onClick={() => onDelete(contact.id)}
        aria-label={`Delete ${contact.name}`}
      >
        Delete
      </button>
    </li>
  )
}

export default ContactItem
