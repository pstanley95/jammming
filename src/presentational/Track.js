import React from "react";
import styles from './styles/Track.module.css'

export default function Track(props) {
    const {songName, artistName, songId, onClick} = props;
    
    return (
        <div className={styles.Track}>
            <div className={styles.TrackText}>
                <h3 className={styles.songName}>{songName}</h3>
                <p>{artistName}</p>
            </div>
            <button className={styles.AddDeleteBtn} value={songId} onClick={onClick}>Add/delete</button>
        </div>
    )
}