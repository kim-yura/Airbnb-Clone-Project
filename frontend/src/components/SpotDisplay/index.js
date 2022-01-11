import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    // const firstFourSpots = allSpotsArr.slice(0, 4);
    const lastFourSpots = allSpotsArr.slice(-4);

    return (
        <div className="spot-display-container">
            <h2>Browse recent Spots</h2>
            <ul className="tile-grid">
                {lastFourSpots.map(spot => (
                    <li className="spot-tile" key={spot.id}>
                        <a className="spot-details" href={`/spots/${spot.id}`}>
                            <img className="tile-image" src={spot.Images[0] ? spot.Images[0].url : "spot-image-default.png"} alt="First available image of Spot"></img>
                        </a>
                        <div className="tile-text">
                            <div className="location-price">
                                <a className="location" href={`https://www.google.com/maps/place/${spot.city}+${spot.state}+${spot.country}`}>
                                    {spot.city}, {spot.state}, {spot.country}
                                </a>
                                <p className="price">
                                    ${spot.price} / night
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default SpotDisplay;
