import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DogShelterSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        getAccessToken();
    }, []);

    const getAccessToken = async () => {
        try {
            const tokenResponse = await fetch(
                'https://api.petfinder.com/v2/oauth2/token',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: 'grant_type=client_credentials&client_id=ReIhixQNs4h7CZsyUxDMxUCwFUcGSduYFHQiAVa4214sGg2tKZ&client_secret=YnQdc5zjbjeV6B6JoupSGeqH90qgqfQsfTNuDF4B',
                }
            );

            if (tokenResponse.ok) {
                const tokenData = await tokenResponse.json();
                setAccessToken(tokenData.access_token);
                console.log('Access Token:', tokenData.access_token);

                const searchResponse = await fetch(
                    `https://api.petfinder.com/v2/organizations`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${tokenData.access_token}`,
                        },
                    }
                );

                if (searchResponse.ok) {
                    const searchData = await searchResponse.json();
                    setSearchResults(searchData.organizations);
                    console.log('Search Results:', searchData.organizations);
                } else {
                    throw new Error('Search request failed');
                }
            } else {
                throw new Error('Access token request failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `https://api.petfinder.com/v2/organizations?location=${searchTerm}`,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                setSearchResults(data.organizations);
            } else {
                throw new Error('Request failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <main className="flex-row justify-center mb-5">
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header p-3 justify-center">Dog Shelter Search</h4>
                    <div className="card-body shadow-lg">
                        <form onSubmit={handleSearch}>
                            <input
                                className="form-input"
                                placeholder="City, State, or ZipCode."
                                name="search"
                                type="text"
                                value={searchTerm}
                                onChange={handleChange}
                            />
                            <button
                                className="btn btn-block fw-bolder fs-5"
                                style={{ cursor: 'pointer' }}
                                type="submit"
                            >
                                Search
                            </button>
                        </form>

                        {searchResults.length > 0 ? (
                            <ul>
                                {searchResults.map((organizations) => (
                                    <li key={organizations.location}>
                                        <h2>{organizations.name}</h2>
                                        <p>{organizations.address}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No results found.</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DogShelterSearch;
