import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initialUsers } from "../actions/action-creators";
import { usersSelector } from "../helpers/selectors";

const useLoadInitialUsers = () => {
    const all = useSelector(usersSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!all.length) dispatch(initialUsers());
    }, []);
};

export default useLoadInitialUsers;
