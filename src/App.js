import logo from './logo.svg';
import './App.css';
import SearchBar from './presentational/SearchBar';
import React, { useState } from 'react';
import SearchResults from './presentational/SearchResults';
import Playlist from './presentational/Playlist';

const bodyStyles = {
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'center',
  color: 'white', 
  width: '100%',
  marginTop: '3rem',
  paddingBottom: '3rem',
  height: '80vh'
}

const sampleTracks = [
  {
      songId: 0,
      songName: 'Dazzle',
      artistName: 'Oh Wonder'
  },
  {
      songId: 1,
      songName: 'Oceansize',
      artistName: 'Oh Wonder'
  },
  {
      songId: 2,
      songName: '22 Make',
      artistName: 'Oh Wonder'
  }]

function App() {
  const [searchBar, setSearchBar] = useState('');
  const handleChange = (e) => {
    setSearchBar(e.target.value);
  }

  const [searchResults, setSearchResults] = useState(sampleTracks);
  const [playlist, setPlaylist] = useState([]);

  const addSongToPlaylist = (e) => {
    const songIdToBeAdded = e.target.value;
    const songToBeAdded = searchResults.find((track) => (track.songId == songIdToBeAdded));
    setPlaylist((prev) => ([...prev, songToBeAdded]));
  }

  const removeSongFromPlaylist = (e) => {
    const songIdToBeRemoved = e.target.value;
    //const updatedPlaylist = playlist.filter((track) => (track.songId !== songIdToBeRemoved));
    const updatedPlaylist = playlist.filter((track) => track.songId != songIdToBeRemoved);
    setPlaylist(updatedPlaylist);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Jammming</h1>
        <SearchBar onChange={handleChange} value={searchBar}/>
      </header>
      <div style={bodyStyles}>
        <SearchResults searchResults={searchResults} addSongToPlaylist={addSongToPlaylist}/>
        <Playlist playlist={playlist} removeSongFromPlaylist={removeSongFromPlaylist}/>
      </div>
    </div>
  );
}

export default App;
