import React from "react";
import PropTypes from "prop-types";
import styles from "./TableRow.scss";

const TableRow = React.memo((user) => {
    const clickHandler = () => {
        console.log(user.login.username);
    };

    return (
        <tr key={user.login.uuid} className={styles.row} onClick={clickHandler}>
            <td>
                <img
                    alt=""
                    src={user.picture.thumbnail}
                    width="48px"
                    height="48px"
                />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.login.username}</td>
            <td>{user.email}</td>
        </tr>
    );
});

TableRow.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string.isRequired,
            last: PropTypes.string.isRequired,
        }),
        login: PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
        }),
        picture: PropTypes.object,
        email: PropTypes.string,
    }),
};

export default TableRow;
