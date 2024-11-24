import React from "react";
import Track from "./Track";

const tracklistStyles = {
    height: '100%'
}

export default function TrackList(props) {
    const {tracks, onClick} = props;

    return (
        <div style={tracklistStyles}>
            {tracks.map((track) => (
                <Track songId={track.id} songName={track.name} artistName={track.artists.map((artist) => artist.name).join(', ')} onClick={onClick}/>
            ))
            }
        </div>
    );
}