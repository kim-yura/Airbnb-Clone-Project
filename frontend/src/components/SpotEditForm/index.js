import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { loadUpdateSpot, updateSpot } from "../../store/spotReducer";

import "./SpotEditForm.css";

function SpotEdit() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { spotId } = useParams();

    const spot = useSelector(state => {
        return state.spot
    });

    const spotObj = Object.values(spot)[0];

    const [address, setAddress] = useState(spotObj?.address);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        setAddress(spotObj?.address);
        setCity(spotObj?.city);
        setState(spotObj?.state);
        setCountry(spotObj?.country);
        setZipcode(spotObj?.zipcode);
        setName(spotObj?.name);
        setPrice(spotObj?.price);
        setDescription(spotObj?.description);
        setImageUrl(spotObj?.imageUrl);

    }, [dispatch, spotId]);

    const [validationErrors, setValidationErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedSpot = {
            address,
            address,
            city,
            state,
            country,
            zipcode,
            name,
            price,
            description,
            imageUrl
        };

        const errors = [];

        if (!address) errors.push('Address cannot be left blank.');
        if (address && (address.length < 5 || address.length > 255)) errors.push('Address must be between 5 and 255 characters.');

        if (!city) errors.push('City cannot be left blank.');
        if (city && (city.length < 3 || city.length > 255)) errors.push('City must be between 3 and 255 characters.');

        if (!state) errors.push('State cannot be left blank.');
        if (state && (state.length < 2 || state.length > 255)) errors.push('State must be between 2 and 255 characters.');

        if (!country) errors.push('Country cannot be left blank.');
        if (country && (country.length < 3 || country.length > 255)) errors.push('Country must be between 3 and 255 characters.');

        if (!zipcode) errors.push('Zipcode cannot be left blank.');
        if (zipcode && (zipcode.length < 2 || zipcode.length > 50)) errors.push('Zipcode must be between 2 and 50 characters.');

        if (!name) errors.push('Name cannot be left blank.');
        if (name && (name.length < 5 || name.length > 100)) errors.push('Name must be between 5 and 100 characters.');

        if (!price) errors.push('Price cannot be left blank.');
        if (price <=0) errors.push('Price must be more than 0.00.');
        const priceRegex = /^\d*(\.\d{0,2})?$/;
        if (priceRegex.test(price)) {
            errors.push('Price must be defined up to 2 decimal places.');
        };

        if (!description) errors.push('Description cannot be left blank.');
        if (description && (description.length < 10 || description.length > 5000)) errors.push('Description must be between 10 and 5000 characters.');

        const imageRegex = /(https?:\/\/.*\.(?:png|jpg))/i;
        if (!imageRegex.test(imageUrl)) {
            errors.push('URL must be a valid jpg or png address.');
        };

        setValidationErrors(errors);

        if (!errors.length) {
            let res = await dispatch(updateSpot(updatedSpot, spotId));
            history.push(`/spots/${spotId}`);

            // TODO: UPON SUCCESS, ROUTE USER TO THE UPDATED SPOT PAGE
            // history.push(`/spots/${SPOTID HERE}`)
        };
    };


    return (
        <div className="edit-spot-background">
            <form className="new-spot-form" onSubmit={handleSubmit}>
                <div className="new-spot-errors">
                    {validationErrors.length > 0 &&
                        validationErrors.map(error =>
                            <p className="spot-error" key={error}>
                                {error}
                            </p>
                        )}
                </div>

                <div className="new-spot-form-inputs">
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        id="address"
                        type="text"
                        placeholder="address"
                    />
                    <input
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        id="city"
                        type="text"
                        placeholder="city"
                    />
                    <input
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        id="state"
                        type="text"
                        placeholder="state"
                    />
                    <input
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                        id="country"
                        type="text"
                        placeholder="country"
                    />
                    <input
                        onChange={(e) => setZipcode(e.target.value)}
                        value={zipcode}
                        id="zipcode"
                        type="text"
                        placeholder="zipcode"
                    />
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        id="name"
                        type="text"
                        placeholder="name"
                    />
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        id="price"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                    />
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        id="description"
                        placeholder="description"
                    />
                    <input
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                        id="imageUrl"
                        placeholder="Enter an image URL (.jpg and .png supported)"
                    />
                </div>

                <button type="submit" className="submit-spot">
                    Submit
                </button>


            </form>
        </div>
    )
}


export default SpotEdit;
