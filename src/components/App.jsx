import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContainerApp } from './App.styled';
import { ToastContainer } from 'react-toastify';

import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const onSubmit = this.handleSubmit;
    const searchQuery = this.state.searchQuery;
    return (
      <ContainerApp>
        <SearchBar onSubmit={onSubmit} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </ContainerApp>
    );
  }
}

export default App;
