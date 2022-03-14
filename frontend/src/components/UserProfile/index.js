import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import PageNotFound from '../PageNotFound';

import { loadUser } from '../../store/userReducer';
import './UserProfile.css';


function UserProfile() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { userId } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(loadUser(userId))
    }, [dispatch, userId]);

    const user = useSelector(state => Object.values(state.users)[0]);

    const [selectedUser, setSelectedUser] = useState();

    useEffect(() => {
        setSelectedUser(user);
        console.log(selectedUser);
    }, [user]);

    if (user) {
        return (
            <div className='site-body'>
                <div className='site-gradient'>
                </div>
                <div className='user-page'>
                    <h2>{user?.username}'s Profile</h2>
                    <h3>{user?.username}'s Spots</h3>
                    <div className={user?.Spots.length > 4 ? 'overflow-grid' : 'flex-grid'}>
                        {user?.Spots.length &&
                            user?.Spots.map(spot => {
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
                                                        ${spot.price} /<br /> night
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            })}
                    </div>
                </div>
            </div>
        )


    } else {
        return (
            <PageNotFound />
        )
    }
};

export default UserProfile;
