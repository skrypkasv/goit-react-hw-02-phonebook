import React from 'react';
// import PropTypes from 'prop-types'

export default function Contact({ list, onDelContact }) {
  return list.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button
        type="button"
        onClick={() => onDelContact(id)}
      >
        Delete
      </button>
    </li>
  ));
}
