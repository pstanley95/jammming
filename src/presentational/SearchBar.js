import React, { useState } from "react";
import styles from './styles/SearchBar.module.css'

export default function SearchBar(props) {
     
    return (
        <form styles={{width: '95%'}}>
            <input id='SearchBar' className={styles.SearchBar} type='text' value={props.value} onChange={props.onChange}/>
        </form>
    )
}