import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "actions/";
import useLoadInitialUsers from "hooks/useLoadInitialUsers";
import useInfiniteScroll from "hooks/useInfiniteScroll";
import { usersSelector } from "helpers/selectors";
import TableRow from "components/TableRow";
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
                        <TableRow key={user.login.uuid} {...user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
