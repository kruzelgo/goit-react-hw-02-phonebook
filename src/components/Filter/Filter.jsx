import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange, onSearch }) => (
  <div className={css.filterContainer}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
      className={css.input}
    />
    <button type="button" onClick={onSearch} className={css.button}>
      Search
    </button>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Filter;
