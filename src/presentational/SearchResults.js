import React from "react";
import TrackList from "./TrackList";
import styles from "./styles/SearchResults.module.css"

const titleStyle = {
    padding: '0 2rem 0 2rem',
    fontSize: '30px',
    marginBottom: '0.5rem'
}

export default function SearchResults(props) {
    const {searchResults, addSongToPlaylist} = props;
    
    return (
        <div className={styles.SearchResultsContainer}>
            <h2 style={titleStyle}>Results</h2>
            <TrackList tracks={searchResults} onClick={addSongToPlaylist}/>
        </div>
    )
}