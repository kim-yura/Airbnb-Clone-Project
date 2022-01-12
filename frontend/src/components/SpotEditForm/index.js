import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { loadUpdateSpot } from "../../store/spotReducer";

import "./SpotEditForm.css";

function SpotEdit() {
    const dispatch = useDispatch();
    const { spotId } = useParams();

    const spot = useSelector(state => {
        return state.spot
    });

    useEffect(() => {
        dispatch(loadUpdateSpot(spotId))
    }, [dispatch, spotId]);

    return (
        <h1>SPOT LOAD RAN</h1>
    )
}


export default SpotEdit;
