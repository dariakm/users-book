import { ActionType } from "../action-types";

export const initialUsers = (users) => {
    return {
        type: ActionType.INITIAL_USERS,
    };
};

export const addUsers = (users) => {
    return {
        type: ActionType.ADD_USERS,
        users,
    };
};

export const infiniteScroll = () => {
    return {
        type: ActionType.INFINITE_SCROLL,
    };
};

export const searchUsers = (searchTerm) => {
    return {
        type: ActionType.SEARCH_USERS,
        searchTerm,
    };
};
