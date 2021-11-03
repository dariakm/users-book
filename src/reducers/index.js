import { ActionType } from "../actions/action-types/";

const initialState = {
    users: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_USERS:
            console.log("reducer", action.users);
            return {
                users: [...state.users, ...action.users],
            };
        default:
            return state;
    }
};

export default reducer;
