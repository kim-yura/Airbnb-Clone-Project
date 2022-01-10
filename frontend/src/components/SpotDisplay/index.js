import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
    const firstThreeSpots = allSpotsArr.slice(0, 3);

    return (
        <div className="spot-display-container">
            <h2>Find your next destination</h2>
            <ul className="tile-grid">
                {firstThreeSpots.map(spot => (
                    <li className="spot-tile" key={spot.id}>
                        <img className="tile-image" src={spot.Images[0].url} alt="First available image of Spot"></img>
                        <h3>{spot.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SpotDisplay;
