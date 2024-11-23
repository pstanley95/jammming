import logo from './logo.svg';
import './App.css';
import SearchBar from './presentational/SearchBar';
import React, { useState } from 'react';

function App() {
  const [searchBar, setSearchBar] = useState('');

  const handleChange = (e) => {
    setSearchBar(e.target.value);
  }
  
  return (
    <div className="App" styles={{width: '100%'}}>
      <header className="App-header" styles={{width: '100%'}}>
        <SearchBar onChange={handleChange} value={searchBar}/>
      </header>
    </div>
  );
}

export default App;
