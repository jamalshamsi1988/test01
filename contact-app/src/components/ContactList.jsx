const ContactList = ({ contacts, deleteHndler }) => {
  return (
    <div>
      <h2>Contact list</h2>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                {contact.name} {contact.lastName}
              </p>
              <p>
                <span>📧</span>
                {contact.email}
              </p>
              <p>
                <span>📞</span>
                {contact.phone}
              </p>
              <button onClick={() => deleteHndler(contact.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Contacts Yet !</p>
      )}
    </div>
  );
};

export default ContactList;
