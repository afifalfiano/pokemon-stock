import React from "react";
import styles from './Search.module.css';


const Search: React.FC<any> = ({search, handleSearch, type, placeholder}) => {
    return (
    <div className={styles.input}>
    <input type={type} ref={search} onChange={handleSearch} placeholder={placeholder} autoFocus={true}/>
    </div>
    )
}

export default Search;