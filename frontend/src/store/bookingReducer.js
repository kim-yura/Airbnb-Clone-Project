import { csrfFetch } from "./csrf";

const CREATE_NEW_BOOKING = 'booking/createNewBooking';
const LOAD_UPDATE_BOOKING = 'booking/loadUpdateBooking';
const UPDATE_BOOKING = 'booking/updateBooking';
const DELETE_BOOKING = 'booking/deleteBooking';

// -------------------- CREATE -------------------- //

export const createNewBooking = (bookingData) => async (dispatch) => {
    const response = await csrfFetch('/api/bookings/new', {
        method: 'POST',
        body: JSON.stringify(bookingData),
    });
    const newBooking = await response.json();
    dispatch(createNewBookingAction(newBooking));
};

export const createNewBookingAction = (newBooking) => {
    return {
        type: CREATE_NEW_BOOKING,
        newBooking
    };
};

// -------------------- UPDATE -------------------- //

export const loadUpdateBooking = (bookingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}/edit`);
    const booking = await response.json();
    dispatch(loadUpdateBookingAction(booking, bookingId));
    return booking;
};

export const loadUpdateBookingAction = (booking, bookingId) => {
    return {
        type: LOAD_UPDATE_BOOKING,
        booking,
        bookingId
    };
};

export const updateBooking = (updatedBooking, bookingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedBooking)
    });
    const bookingData = await response.json();
    dispatch(updateBookingAction(bookingData));
};

export const updateBookingAction = (bookingData) => {
    return {
        type: UPDATE_BOOKING,
        bookingData
    };
};

// -------------------- DELETE -------------------- //

export const deleteBooking = (bookingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE',
    });
    const booking = await response.json();
    dispatch(deleteBookingAction(booking, bookingId));
};

export const deleteBookingAction = (booking, bookingId) => {
    return {
        type: DELETE_BOOKING,
        booking,
        bookingId
    };
};

// -------------------- REDUCER -------------------- //

const bookingReducer = (state = {}, action) => {
    let newState = { ...state };

    switch (action.type) {
        case CREATE_NEW_BOOKING:
            newState[action.bookingId] = action.booking;
            return newState;

        case LOAD_UPDATE_BOOKING:
            newState[action.bookingId] = action.booking;
            return newState;

        case UPDATE_BOOKING:
            newState[action.bookingId] = action.booking;
            return newState;

        case DELETE_BOOKING:
            newState = { ...newState };
            delete newState[action.bookingId];
            return newState;

        default:
            return state;
    }
};

export default bookingReducer;
