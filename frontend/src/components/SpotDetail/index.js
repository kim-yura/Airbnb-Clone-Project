import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal';

import { loadSpotDetail } from '../../store/spotReducer';
import ConfirmDelete from '../SpotDeleteConfirmationModal/ConfirmDelete';
import PageNotFound from '../PageNotFound';

import './SpotDetail.css';

function SpotDetail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    const [showModal, setShowModal] = useState(false);
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [reasonForStay, setReasonForStay] = useState('');

    const spot = useSelector(state => {
        return state.spot
    });

    useEffect(() => {
        dispatch(loadSpotDetail(spotId))
    }, [dispatch, spotId]);

    const spotObj = Object.values(spot)[0];

    if (spotObj) {
        return (
            <>
                <div className="site-body">
                    <div className='site-gradient' />
                    <div className="detail-body">
                        <div className='detail-left'>
                            <img className="detail-image" src={spotObj.imageUrl} alt="Depiction of spare room available" />
                            {sessionUser?.id === spotObj.User.id ?
                                <div className="edit-delete-buttons">
                                    <Link to={`/spots/${spotObj.id}/edit`}>
                                        Edit
                                    </Link>
                                    <a
                                        onClick={(e) => {
                                            setShowModal(true)
                                        }}>
                                        Delete
                                    </a>
                                    {showModal && (
                                        <Modal onClose={() => setShowModal(false)}>
                                            <ConfirmDelete />
                                        </Modal>
                                    )}
                                </div>
                                :
                                <>
                                    <div className='booking-container'>
                                        <div className='booking-checkin-checkout'>
                                            <h4>CHECK-IN</h4>
                                            <input type="date"
                                                min={new Date().toISOString().split('T')[0]}></input>
                                        </div>
                                        <div className='booking-checkin-checkout'>
                                            <h4>CHECK-OUT</h4>
                                            <input type="date"
                                                min={new Date().toISOString().split('T')[0]}></input>
                                        </div>
                                    </div>
                                    <div className='booking-button'>
                                        <h4>Include a note to the host for the reason of your stay:</h4>
                                        <textarea></textarea>
                                        <button>BOOK SPOT</button>
                                    </div>
                                    <div className='booking-checkin-checkout'>
                                        <br />
                                        <h4>Currently Unavailable Dates:</h4>
                                        {spotObj.Bookings.length ?
                                            Object.values(spotObj.Bookings).map((booking, idx) => (
                                                <li className='unavailable-dates'>{booking.startDate.split('T')[0].replaceAll('-', ' / ')} - {booking.endDate.split('T')[0].replaceAll('-', ' / ')}</li>
                                            ))
                                            : <li className='unavailable-dates'>This Spot has no bookings yet</li>}
                                    </div>
                                </>
                            }
                        </div>
                        <div className='detail-right'>
                            <div className="detail-text">
                                <h1>{spotObj.name}</h1>
                                <h3 className="detail-map"><a href={`https://www.google.com/maps/place/${spotObj.city}+${spotObj.state}+${spotObj.country}`} target="_blank">
                                    {spotObj.city}, {spotObj.state}, {spotObj.country}
                                </a></h3>
                                <h4 className="detail-price"><b>${spotObj.price}</b> / Night</h4>
                                <h4 className='detail-host'>Hosted by <a href={`/users/${spotObj.User.id}`}>{spotObj.User.username}</a></h4>
                                <p className="detail-long-text">
                                    {spotObj.description}
                                </p>
                            </div>
                        </div>





                        <h2 className="reviews-header">Reviews</h2>
                        <div className="detail-reviews">
                            <div className="detail-review">
                                <p>{spotObj.Reviews[0] ? spotObj.Reviews[0].id : ""}</p>
                                <p>{spotObj.Reviews[0] ? spotObj.Reviews[0].review : ""}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <PageNotFound />
        )
    };

};

export default SpotDetail;
