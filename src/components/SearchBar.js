import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchQuery: '',
  };

  handleOnchange = (event) => {
    this.props.onFilter(event.target.value.trim()); //o gajo elimina o espaço
    this.setState({
      searchQuery: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="searchQuery"
          value={this.state.searchQuery}
          onChange={this.handleOnchange}
        />
      </form>
    );
  }
}

export default SearchBar;
