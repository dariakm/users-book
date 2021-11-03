import Users from "../../components/Users/";
import Header from "../../components/Header/";
import "./HomePage.scss";

function HomePage() {
    return (
        <>
            <Header />
            <div className="container">
                <Users />
                <div className="footer"> Footer </div>
            </div>
        </>
    );
}

export default HomePage;
