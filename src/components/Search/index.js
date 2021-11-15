import React, { useState, useCallback } from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "actions";
import { useDispatch } from "react-redux";
import styles from "./Search.module.scss";

const Search = React.memo(() => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const { searchUsers } = bindActionCreators(actionCreators, dispatch);

    const onChange = useCallback((e) => {
        const inputValue = e.target.value;
        setSearchTerm(inputValue);
        searchUsers(inputValue);
    });

    return (
        <form className={styles.searchBar}>
            <input
                className={styles.search}
                type="search"
                placeholder="Search username"
                aria-label="Search"
                value={searchTerm}
                onChange={onChange}
            />
        </form>
    );
});

export default Search;
