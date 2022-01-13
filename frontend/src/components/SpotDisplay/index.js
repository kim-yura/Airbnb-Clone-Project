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
    }, []);

    const allSpotsArr = Object.values(allSpots);

    const lastFourSpots = allSpotsArr.reverse().slice(0, 4);

    return (
        <div className="spot-display-container">
            <h2>Browse recent Spots</h2>
            <ul className="tile-grid">
                {lastFourSpots.map(spot => {
                    if (spot) {
                        return (
                            <li className="spot-tile" key={spot.id}>
                                <a className="spot-details" href={`/spots/${spot.id}`} key={spot.id}>
                                    <img className="tile-image" src={spot.imageUrl} alt="First available image of Spot"></img>
                                </a>
                                <div className="tile-text">
                                    <div className="location-price">
                                        <a className="location" href={`https://www.google.com/maps/place/${spot.city}+${spot.state}+${spot.country}`} target="_blank">
                                            {spot.city}, {spot.state}, {spot.country}
                                        </a>
                                        <p className="price">
                                            ${spot.price} / night
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    } else {
                        const replacement = (allSpotsArr[0]);
                        return (
                            <li className="spot-tile" key={replacement.id}>
                                <a className="spot-details" href={`/spots/${replacement.id}`} key={replacement.id}>
                                    <img className="tile-image" src={replacement.imageUrl} alt="First available image of Spot"></img>                                </a>
                                <div className="tile-text">
                                    <div className="location-price">
                                        <a className="location" href={`https://www.google.com/maps/place/${replacement.city}+${replacement.state}+${replacement.country}`} target="_blank">
                                            {replacement.city}, {replacement.state}, {replacement.country}
                                        </a>
                                        <p className="price">
                                            ${replacement.price} / night
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                })}
            </ul>
        </div >
    )
}

export default SpotDisplay;
