import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spot/loadAllSpots';
const LOAD_SPOT_DETAIL = 'spot/loadSpotDetail';



export const loadAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const allSpots = await response.json();
    dispatch(loadAllSpotsAction(allSpots));
    return allSpots;
};

export const loadAllSpotsAction = (allSpots) => {
    return {
        type: LOAD_ALL_SPOTS,
        allSpots
    }
};


export const loadSpotDetail = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`);
    const spot = await response.json();
    dispatch(loadSpotDetailAction(spot, spotId));
    return spot;
};

export const loadSpotDetailAction = (spot, spotId) => {
    return {
        type: LOAD_SPOT_DETAIL,
        spot,
        spotId
    }
};




const spotReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case LOAD_ALL_SPOTS:
            action.allSpots.forEach(spot => { newState[spot.id] = spot });
            return newState;
        case LOAD_SPOT_DETAIL:
            newState[action.spotId] = action.spot;
            return newState;
        default:
            return state;
    }
};

export default spotReducer;
