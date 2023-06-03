import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import Auth from '../../utils/auth';

function DogSearchFilter(item) {
    //const [state, dispatch] = useStoreContext();

    const {
        dogId,
        name,
        breed,
        age,
        img
    } = item;

    return (
        <div>
            <h2>Search all available dogs</h2>

            <button>Submit</button>

        </div>
    );
}

export default DogSearchFilter;
