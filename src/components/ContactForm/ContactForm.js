import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
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
    this.props.onAddContact(this.state);
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
          <span className={s.label}>Name</span>
          <input
            type="text"
            placeholder="John Snow"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          ></input>
        </label>

        <label>
          <span className={s.label}>Number</span>
          <input
            type="text"
            placeholder="000-00-00"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
          ></input>
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
