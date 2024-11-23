import React from "react";
import Track from "./Track";

export default function TrackList(props) {
    const {tracks, onClick} = props;

    return (
        <div>
            {tracks.map((track) => (
                <Track songId={track.songId} songName={track.songName} artistName={track.artistName} onClick={onClick}/>
            ))
            }
        </div>
    );
}