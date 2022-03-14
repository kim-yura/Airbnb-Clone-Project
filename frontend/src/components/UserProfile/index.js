import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import PageNotFound from '../PageNotFound';

import { loadUser } from '../../store/userReducer';
import { loadSpotDetail } from '../../store/spotReducer';
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
                        {user?.Spots.length ?
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
                            })
                            :
                            <div className='no-spots'>
                                <h4>{user?.username} has no Spots</h4>
                            </div>
                        }
                    </div>
                    {parseInt(sessionUser?.id) === parseInt(userId) ?
                        <>
                            <h3>Your Upcoming Trips</h3>
                            <div className={user?.Bookings.length > 4 ? 'overflow-grid' : 'flex-grid'}>
                                {user?.Bookings.length ?
                                    user?.Bookings.map(spot => {
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
                                    })
                                    :
                                    <div className='no-spots'>
                                        <h4>You haven't booked any trips!</h4>
                                    </div>
                                }
                            </div>
                        </>
                        : ''}
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
