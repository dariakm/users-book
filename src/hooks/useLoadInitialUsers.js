import { useSelector } from "react-redux";
import { useEffect } from "react";
import { usersSelector } from "../helpers/selectors";

const useLoadInitialUsers = (fn) => {
    const all = useSelector(usersSelector);
    useEffect(() => {
        if (!all.length) fn();
    }, []);
};

export default useLoadInitialUsers;
