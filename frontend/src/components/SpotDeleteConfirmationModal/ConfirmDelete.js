import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {deleteSpot} from "../../store/spotReducer";

function ConfirmDelete() {
    const dispatch = useDispatch();
    const history = useHistory();

    const spot = useSelector(state => {
        return state.spot;
    });

    const spotObj = Object.values(spot)[0];

    return (
        <a
            onClick={() => {
                dispatch(deleteSpot(spotObj.id));
                history.push("/spots-delete-confirmation");
            }}>
            Confirm Delete
        </a>
    )
};

export default ConfirmDelete;
