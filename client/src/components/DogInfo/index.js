import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import Auth from '../../utils/auth';

function DogInfo(item) {
    //const [state, dispatch] = useStoreContext();

    const {
        dogId,
        name,
        breed,
        age,
        img
    } = item;

    return (
        <div className="card px-1 py-1">
            <Link to={`/dogs/${dogId}`}>
                <img
                    alt={name}
                    src={`/images/${img}`}
                />
                <p>{name} Name</p>
            </Link>
            <div>
                <div>{breed} Breed</div>
                <span>{age} Age</span>
            </div>
        </div>
    );
}

export default DogInfo;
