import React from "react";
import styles from './styles/Playlist.module.css'
import TrackList from "./TrackList";

const titleStyle = {
    padding: '0 2rem 0 2rem',
    fontSize: '30px',
    marginBottom: '0.5rem'
}

export default function Playlist(props) {
    const {playlist, removeSongFromPlaylist} = props;
    
    return (
        <div className={styles.PlaylistContainer}>
            <h2 style={titleStyle}>Playlist</h2>
            <TrackList tracks={playlist} onClick={removeSongFromPlaylist} text='Delete'/>
        </div>
    )
}