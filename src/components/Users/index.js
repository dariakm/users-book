import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../actions/";
import useLoadInitialUsers from "../../hooks/useLoadInitialUsers";
import { usersSelector } from "../../helpers/selectors";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import "./Users.scss";

function UserList() {
    const { infiniteScroll, initialUsers } = bindActionCreators(
        actionCreators,
        useDispatch()
    );

    useLoadInitialUsers(initialUsers);
    useInfiniteScroll(infiniteScroll);
    const users = useSelector(usersSelector);

    return (
        <div className="userlist">
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.login.username}>
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
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
