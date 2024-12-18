import React, { useState } from "react";
import styles from './styles/SearchBar.module.css';
import getSpotifyData from "./getSpotifyData";

export default function SearchBar(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const search = props.value;
        const tracks = await getSpotifyData(search);

        props.returnSearchResults(tracks);
    }

    return (
        <form className={styles.SearchBarContainer} onSubmit={handleSubmit} value={props.value}>
            <input id='SearchBar' className={styles.SearchBar} type='text' value={props.value} onChange={props.onChange}/>
            <label for='SearchBar' className={styles.label}><button className={styles.searchButton}>SEARCH</button></label>
        </form>
    )
}