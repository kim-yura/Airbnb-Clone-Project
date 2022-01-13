import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteSpot } from "../../store/spotReducer";

import "./ConfirmDelete.css";

function ConfirmDelete() {
    const dispatch = useDispatch();
    const history = useHistory();

    const spot = useSelector(state => {
        return state.spot;
    });

    const spotObj = Object.values(spot)[0];

    return (
        <div className="confirm-delete-modal">
            <h3>Are you sure you want to delete this Spot?</h3>
            <a
                className="confirm-delete-button"
                onClick={() => {
                    dispatch(deleteSpot(spotObj.id));
                    history.push("/spots-delete-confirmation");
                }}>
                Confirm Delete
            </a>
        </div>
    )
};

export default ConfirmDelete;
