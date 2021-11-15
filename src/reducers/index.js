import { ActionType } from "actions/action-types/";

const initialState = {
    users: [],
    all: [],
    searchPattern: "",
};

const searchUsers = (users, pattern) => {
    if (!pattern) return users;

    let filteredUsers = users.filter((user) =>
        `${user.name.last} ${user.name.first}`
            .toLowerCase()
            .includes(pattern.toLowerCase())
    );

    return filteredUsers;
};

const reducer = (state = initialState, action) => {
    console.log("reducer", state);
    switch (action.type) {
        case ActionType.ADD_USERS:
            console.log("reducer", action.users);
            let allUsers = [...state.users, ...action.users];
            return {
                ...state,
                all: allUsers,
                users: searchUsers(allUsers, state.searchPattern),
            };

        case ActionType.SEARCH_USERS:
            const filteredUsers = searchUsers(state.all, action.searchTerm);
            console.log(filteredUsers);
            return {
                ...state,
                users: filteredUsers,
                searchPattern: action.searchTerm,
            };

        default:
            return state;
    }
};

export default reducer;
