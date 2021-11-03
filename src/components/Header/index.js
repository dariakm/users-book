import styles from "./Header.module.scss";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href="#">Home</a>
                </li>
                <li className={styles.menuItem}>
                    <a href="#">Settings</a>
                </li>
            </ul>
            <form className={styles.searchBar}>
                <input
                    className={styles.search}
                    type="search"
                    placeholder="Search username"
                    aria-label="Search"
                />
            </form>
        </header>
    );
};

export default Header;
