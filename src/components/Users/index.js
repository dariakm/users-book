import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../actions/";
import "./Users.scss";

function UserList() {
    const userlist = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const { infiniteScroll, initialUsers } = bindActionCreators(
        actionCreators,
        dispatch
    );

    const onScroll = useCallback(() => {
        const bodyHeight = document.body.offsetHeight;
        const diff = 300;
        const viewport = window.visualViewport;
        const scrollPosition = viewport.pageTop + viewport.height;
        if (bodyHeight - scrollPosition <= diff) {
            console.log("Load more users");
            infiniteScroll();
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    useEffect(() => {
        initialUsers();
    }, []);

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
                    {userlist.map((user) => (
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
