import { csrfFetch } from './csrf';

// -------------------- ACTION CREATORS -------------------- //

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

export const setUser = (user) => {
    return {
        type: SET_USER,
        user: user
    }
};

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
};

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
};



const initialState = { user: null }
// session reducer will hold current session user's information

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER: {
            newState = Object.assign({}, state);
            newState.user = action.user;
            return newState;
        }
        case REMOVE_USER: {
            return { user: null }
        }
        default:
            return state;
    }
}

export default sessionReducer;
