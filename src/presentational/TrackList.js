import React from "react";
import Track from "./Track";

export default function TrackList(props) {
    const {tracks, onClick} = props;

    return (
        <div>
            {tracks.map((track) => (
                <Track songId={track.Id} songName={track.name} artistName={track.artists.map((artist) => artist.name)} onClick={onClick}/>
            ))
            }
        </div>
    );
}