import React from 'react';
import Contact from './Contact/Contact';
// import PropTypes from 'prop-types'

export default function ContactList({
  contacts,
  onClearContact,
}) {
  return (
    <div>
      <ul>
        <Contact
          list={contacts}
          onDelContact={onClearContact}
        />
      </ul>
    </div>
  );
}
