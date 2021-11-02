import { useState, useEffect } from "react";
import UserBook from "../../components/Users/";
import Footer from "../../components/Footer/";
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
        <div className="container">
            <header className="header">
                <h1>Header</h1>
            </header>
            <section className="search">Search Field</section>
            {users.length > 0 ? <UserBook users={users} /> : null}
            <div className="footer"> Footer </div>
        </div>
    );
}

export default HomePage;
