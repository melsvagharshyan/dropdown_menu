import styles from './Header.module.css';
import React from "react";


const Header: React.FC = ()=> {
    return (
        <div className={styles.Header}>
            <div><a href="/settings">Settings</a></div>
            <div><a href="/profiles">Profiles</a></div>
            <div><a href="musics">Musics</a></div>
        </div>
    )
}

export default Header;