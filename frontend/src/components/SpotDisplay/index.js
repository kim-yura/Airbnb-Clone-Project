import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { loadAllSpots } from '../../store/spotReducer';


import './SpotDisplay.css';


function SpotDisplay() {
    const dispatch = useDispatch();

    const allSpots = useSelector(state => {
        return state.spot
    });

    useEffect(() => {
        dispatch(loadAllSpots())
    }, [dispatch]);

    const allSpotsArr = Object.values(allSpots);

    return (
        <div className="spot-display-container">
            <h2>Find your next destination</h2>
            {allSpotsArr.map(spot => (
                <p>{spot.id}</p>
            ))}
        </div>
    )
}

export default SpotDisplay;
