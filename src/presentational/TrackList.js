import React from "react";
import Track from "./Track";

const tracklistStyles = {
    height: '100%'
}

export default function TrackList(props) {
    const {tracks, onClick} = props;

    return (
        <div style={tracklistStyles}>
            {tracks ? tracks.map((track) => (
                <Track songId={track.id} text={props.text} songName={track.name} artistName={track.artists ? track.artists.map((artist) => artist.name).join(', ') : ''} onClick={onClick}/>
            ))
            : <h2 style={{marginLeft: '2rem'}}>No results to show</h2>}
        </div>
    );
}