import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spot/loadAllSpots';



export const loadAllSpotsAction = (allSpots) => {
    return {
        type: LOAD_ALL_SPOTS,
        allSpots
    }
};

export const loadAllSpots = () => async(dispatch) => {
    const response = await csrfFetch('/api/spots');
    const allSpots = await response.json();
    dispatch(loadAllSpotsAction(allSpots));
    return allSpots;
}



const spotReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_ALL_SPOTS:
            action.allSpots.forEach(spot => { newState[spot.id] = spot });
            return newState;
        default:
            return state;
    }
};

export default spotReducer;
