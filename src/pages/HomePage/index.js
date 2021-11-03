import { useState, useEffect } from "react";
import UserBook from "../../components/Users/";
import Header from "../../components/Header/";
import "./HomePage.scss";

function HomePage() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(
            `https://randomuser.me/api/?nat=nl&results=20&inc=name,email,picture,login`
        )
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.results);
                console.log(data);
            });
    }, []);
    return (
        <>
            <Header />
            <div className="container">
                {users.length > 0 ? <UserBook users={users} /> : null}
                <div className="footer"> Footer </div>
            </div>
        </>
    );
}

export default HomePage;
