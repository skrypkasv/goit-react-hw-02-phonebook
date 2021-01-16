import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.state.name.trim().length > 0
      ? this.props.onAddContact(this.state)
      : alert('unable to add empty field!!!');
    this.resetInputs();
  };

  resetInputs = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span className={styles.label}>Name</span>
          <input
            type="text"
            required
            placeholder="John Snow"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          ></input>
        </label>

        <label>
          <span className={styles.label}>Number</span>
          <input
            type="number"
            required
            placeholder="+00-000-000-00-00"
            maxlength="13"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
          ></input>
        </label>

        <button type="submit" className={styles.btn_submit}>
          Add contact
        </button>
      </form>
    );
  }
}
