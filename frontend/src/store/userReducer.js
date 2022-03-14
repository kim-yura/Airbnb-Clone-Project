import { csrfFetch } from "./csrf";

const LOAD_USER = 'users/loadUser';

export const loadUser = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}`);
    const user = await response.json();
    dispatch(loadUserAction(user, userId));
    return user;
};

export const loadUserAction = (user, userId) => {
    return {
        type: LOAD_USER,
        user,
        userId
    }
};

const userReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_USER:
            newState[action.userId] = action.user;
            return newState;

        default:
            return state;
    }
};

export default userReducer;
