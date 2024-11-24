import logo from './logo.svg';
import './App.css';
import SearchBar from './presentational/SearchBar';
import React, { useState, useEffect } from 'react';
import SearchResults from './presentational/SearchResults';
import Playlist from './presentational/Playlist';
import checkAuthorization from './checkAuthorization';
import getSpotifyToken from './presentational/getSpotifyToken';

const bodyStyles = {
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'center',
  color: 'white', 
  width: '100%',
  marginTop: '3rem',
  paddingBottom: '3rem',
  height: '100%'
}

const sampleTracks = [
  {
      id: 0,
      name: 'Dazzle',
      artists: [{name: 'Oh Wonder'}]
  },
  {
      id: 1,
      name: 'Oceansize',
      artists: [{name: 'Oh Wonder'}]
  },
  {
      id: 2,
      name: '22 Make',
      artists: [{name: 'Oh Wonder'}]
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
    const songToBeAdded = searchResults.find((track) => (track.id == songIdToBeAdded));
    setPlaylist((prev) => ([...prev, songToBeAdded]));
  }

  const removeSongFromPlaylist = (e) => {
    const songIdToBeRemoved = e.target.value;
    //const updatedPlaylist = playlist.filter((track) => (track.songId !== songIdToBeRemoved));
    const updatedPlaylist = playlist.filter((track) => track.id != songIdToBeRemoved);
    setPlaylist(updatedPlaylist);
  }

  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
      // Perform authorization check
      console.log('Checking authorization...');
      const token = checkAuthorization();
      setIsAuthorized(!!token); // Set authorization state
  }, []);

  if (!isAuthorized) {
      return <div>Redirecting to Spotify for authorization...</div>;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Jammming</h1>
        <SearchBar onChange={handleChange} value={searchBar} returnSearchResults={setSearchResults}/>
      </header>
      <div style={bodyStyles}>
        <SearchResults searchResults={searchResults} addSongToPlaylist={addSongToPlaylist}/>
        <Playlist playlist={playlist} removeSongFromPlaylist={removeSongFromPlaylist}/>
      </div>
    </div>
  );
}

export default App;
