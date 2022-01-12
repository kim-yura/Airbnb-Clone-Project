import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spot/loadAllSpots';
const LOAD_SPOT_DETAIL = 'spot/loadSpotDetail';
const CREATE_NEW_SPOT = 'spot/createNewSpot';
const LOAD_UPDATE_SPOT = 'spot/loadUpdateSpot';
const UPDATE_SPOT = 'spot/updateSpot';
const DELETE_SPOT = 'spot/deleteSpot';

// -------------------- READ -------------------- //

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


// -------------------- CREATE -------------------- //

export const createNewSpot = (spotData) => async (dispatch) => {
    const response = await csrfFetch('/api/spots/new', {
        method: 'POST',
        body: JSON.stringify(spotData),
    });
    const newSpot = await response.json();
    console.log(newSpot);
    dispatch(createNewSpotAction(newSpot));
    // return newSpot;
};

export const createNewSpotAction = (newSpot) => {
    return {
        type: CREATE_NEW_SPOT,
        newSpot
    }
};


// -------------------- UPDATE -------------------- //

export const loadUpdateSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/edit`);
    const spot = await response.json();
    // We are hitting this
    console.log(spot);
    dispatch(loadUpdateSpotAction(spot, spotId));
    return spot;
};

export const loadUpdateSpotAction = (spot, spotId) => {
    return {
        type: LOAD_UPDATE_SPOT,
        spot,
        spotId
    }
};

export const updateSpot = (updatedSpot, spotId) => async (dispatch) => {
    console.log(spotId)
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedSpot),
    });
    const spotData = await response.json();
    console.log(spotData);
    dispatch(updateSpotAction(spotData));
};

export const updateSpotAction = (spotData) => {
    return {
        type: UPDATE_SPOT,
        spotData
    }
};


// -------------------- DELETE -------------------- //

export const deleteSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE',
    });
    const spot = await response.json();
    dispatch(deleteSpotAction(spot, spotId));
};

export const deleteSpotAction = (spot, spotId) => {
    return {
        type: DELETE_SPOT,
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

        case CREATE_NEW_SPOT:
            newState[action.spotId] = action.spot;
            return newState;

        case LOAD_UPDATE_SPOT:
            newState[action.spotId] = action.spot;
            return newState;

        case UPDATE_SPOT:
            newState[action.spotId] = action.spot;
            return newState;

        case DELETE_SPOT:
            newState = { ...newState };
            delete newState[action.spotId];
            return newState;

        default:
            return state;
    }
};

export default spotReducer;
