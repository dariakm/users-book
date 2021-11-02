import { SET_USERS } from "../actions/";

const initialState = {
    users: [],
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                users: action.users,
            };
        default:
            return state;
    }
};

export default globalReducer;
