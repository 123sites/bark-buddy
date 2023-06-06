import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DogShelterSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [accessToken, setAccessToken] = useState('');

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJSZUloaXhRTnM0aDdDWnN5VXhETXhVQ3dGVWNHU2R1WUZIUWlBVmE0MjE0c0dnMnRLWiIsImp0aSI6IjM2NWY1ZTAzYmI0YzQ4NzhmNDJlMmE3NWFlNmY3ODhlNDcyOTIyNDU1NTA0OGY5MmJmYWE0ZWQyN2I2ZjkzMzYxYTBmYTIyYjY2NWMxYmY3IiwiaWF0IjoxNjg2MDMwNzkxLCJuYmYiOjE2ODYwMzA3OTEsImV4cCI6MTY4NjAzNDM5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.JuDsZyqgslaL0NdbHMDN84-i50TlqG_dNjkWJCEiG_t75dboabnNlPDRU2qKGP6kiuX7gCVzpIsjEG8uCD6vwhC_6-dCtmEF8fNt68ZlGvKXXMA8yN3U-z5uXmX716Swjws_897dOm_PCtdJ_g9xTiYqcF_X3T43g6HhaPSUHFo4LffS3ZAJ74t6eFQfagRGD54agA9sMU_9ck0MmZ_m9y76hcN9Z8p5sofLnW7r8nWQZ26fjmcdHrphueoBGwpj-NWmEzVdYl0SYT12uTj3hbL_K72ewlOG6qZpG25YSsxM2OigsPM_cfhZnSVMo2zWEl_N5av-qojVatV5mOFtOQ';

    useEffect(() => {
        getAccessToken();
    }, []);

    const getAccessToken = async () => {
        try {
            const response = await fetch(
                'https://api.petfinder.com/v2/oauth2/token',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        grant_type: 'client_credentials',
                        client_id: 'ReIhixQNs4h7CZsyUxDMxUCwFUcGSduYFHQiAVa4214sGg2tKZ',
                        client_secret: 'YnQdc5zjbjeV6B6JoupSGeqH90qgqfQsfTNuDF4B',
                    }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                setAccessToken(data.access_token);
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
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                setSearchResults(data.organizations);
            } else {
                throw new Error('Request failed');
            }
            console.log(response);
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
                                {searchResults.map((organization) => (
                                    <li key={organization.location}>
                                        <h2>{organization.name}</h2>
                                        <p>{organization.address}</p>
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
