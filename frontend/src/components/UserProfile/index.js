import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



function UserProfile() {
    const { userId } = useParams();

    return (
        <>
        USER PROFILE FOR {userId}
        </>
    )

};

export default UserProfile;
