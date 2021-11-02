import { Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SettingsPage from "../../pages/SettingsPage";

const UsersBook = () => (
    <>
        <div className="usersbook">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/settings/" component={SettingsPage} />
        </div>
    </>
);

export default UsersBook;
