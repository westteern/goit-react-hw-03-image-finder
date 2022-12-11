import PropTypes from 'prop-types';
import { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleInput = e => {
    const inputValue = e.currentTarget.value.toLowerCase();
    this.setState({ searchQuery: inputValue });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      alert('This field can`t be empty');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    const onChange = this.handleInput;
    const onSubmit = this.handleSubmit;
    const inputValue = this.state.searchQuery;
    return (
      <header>
        <form onSubmit={onSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            onChange={onChange}
            value={inputValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
