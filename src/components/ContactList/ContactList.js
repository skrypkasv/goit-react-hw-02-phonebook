import React from 'react';
import Contact from './Contact/Contact';
import PropTypes from 'prop-types';

export default function ContactList({
  contacts,
  onClearContact,
}) {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelContact={onClearContact}
          />
        ))}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClearContact: PropTypes.func.isRequired,
};
