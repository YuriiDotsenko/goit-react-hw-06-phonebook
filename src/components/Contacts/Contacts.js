import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import ContactsList from '../ContactsList';
import { connect } from 'react-redux';
import actions from './../../redux/contacts/contacts-actions';

const Contacts = ({ title, contacts, setFilter }) => {
  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <>
      <h2>{title}</h2>
      <Input
        label="Find contacts by name:"
        type="text"
        name="filter"
        value={contacts.filter}
        handleInputChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <ContactsList />
    </>
  );
};

Contacts.defaultProps = {
  title: '',
};

Contacts.propTypes = {
  title: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};
const mapDispatchToProps = dispatch => ({
  setFilter: value => dispatch(actions.setUpFilter(value)),
  removeItem: value => dispatch(actions.removeField(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
