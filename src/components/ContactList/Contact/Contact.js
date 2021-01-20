import React from 'react';
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

export default function Contact({
  id,
  name,
  number,
  onDelContact,
}) {
  return (
    <li className={styles.item}>
      <ul className={styles.item_list}>
        <li className={styles.contact_data}>
          <span className={styles.name}>{name}</span>:{' '}
        </li>
        <li className={styles.contact_data}>
          <span className={styles.number}>{number}</span>
        </li>
        <li className={styles.contact_btn_del}>
          <button
            className={styles.btn_delete}
            type="button"
            onClick={() => onDelContact(id)}
          >
            Delete
          </button>
        </li>
      </ul>
    </li>
  );
}

Contact.propTypes = {
  // list: PropTypes.array.isRequired,
  onDelContact: PropTypes.func.isRequired,
};
