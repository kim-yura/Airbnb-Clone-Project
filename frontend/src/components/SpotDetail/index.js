import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadSpotDetail } from '../../store/spotReducer';


import './SpotDetail.css';

function SpotDetail() {
    const dispatch = useDispatch();
    const { spotId } = useParams();

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
                <div className="site-background">
                    <div className="detail-container">
                        <img className="detail-image" src={spotObj.Images[0].url} alt="Depiction of spare room available" />
                        <div className="detail-text">
                            <h1>{spotObj.name}</h1>
                            <h3 className="detail-map"><a href={`https://www.google.com/maps/place/${spotObj.city}+${spotObj.state}+${spotObj.country}`} target="_blank">
                                {spotObj.city}, {spotObj.state}, {spotObj.country}
                            </a></h3>
                            <p className="detail-long-text">
                                Cupcake ipsum dolor sit amet biscuit. Chocolate sesame snaps liquorice macaroon jelly beans jelly-o cheesecake. Muffin donut pie toffee ice cream. Cake sugar plum fruitcake dragée cookie sweet roll gummies bear claw. Sugar plum caramels tiramisu bonbon gingerbread oat cake liquorice liquorice. Caramels danish chupa chups liquorice gummies gummies marzipan. Oat cake ice cream jujubes icing tiramisu. Cake candy canes dragée lemon drops cake. Bonbon danish gummies sesame snaps liquorice pudding gummi bears caramels dessert. Candy canes sugar plum pudding topping lemon drops cake macaroon sugar plum gummies.
                            </p>
                            <p className="detail-long-text">
                                Brownie caramels tootsie roll tart jujubes. Chocolate cake chocolate bar sesame snaps marshmallow biscuit. Wafer lemon drops pudding oat cake liquorice cotton candy gummies croissant jujubes. Powder jujubes oat cake pudding chocolate toffee biscuit croissant cupcake. Apple pie sesame snaps icing marshmallow cake carrot cake sugar plum pastry lemon drops. Soufflé tootsie roll powder shortbread icing gummi bears liquorice.
                            </p>
                        </div>
                    </div>
                    <h2 class="reviews-header">Reviews</h2>
                    <div className="detail-reviews">
                        <div className="detail-review">
                            <p>{spotObj.Reviews[0].id}</p>
                            <p>{spotObj.Reviews[0].review}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <></>
        )
    };

};

export default SpotDetail;
