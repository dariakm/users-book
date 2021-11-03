import { useCallback, useEffect } from "react";
import "./Users.scss";

function UserList({ users }) {
    const onScroll = useCallback(() => {
        const bodyHeight = document.body.offsetHeight;
        const diff = 200;
        const scrollPosition =
            window.visualViewport.pageTop + window.visualViewport.height;
        if (bodyHeight - scrollPosition < diff) {
            console.log("Load more users");
        }
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

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
