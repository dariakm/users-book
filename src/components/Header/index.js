import Search from "../Search";
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
            <Search />
        </header>
    );
};

export default Header;
