import React from 'react';
import { connect } from 'react-redux';
import './ContactsList.css';

import actions from '../../redux/contacts/contacts-actions';

const ContactsList = ({ filteredContacts, removeItem }) => (
  <ul className="List">
    {filteredContacts.map(({ name, id, number }) => (
      <li key={id} className="Contact">
        <p className="Text">
          <span className="Name">{name}</span>
          <span className="Phone">{number}</span>
        </p>
        <button
          className="Remove__btn"
          type="button"
          onClick={() => removeItem(id)}
        >
          Remove contact
        </button>
      </li>
    ))}
  </ul>
);

const filterContacts = (filter, items) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts }) => {
  return {
    filteredContacts: filterContacts(contacts.filter, contacts.items),
  };
};
const mapDispatchToProps = dispatch => ({
  removeItem: value => dispatch(actions.removeField(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
