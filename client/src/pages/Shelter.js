import React, { useState, useEffect } from "react";
import "../assets/style.css";

const DogShelterSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    getAccessToken();
  }, []);

  const getAccessToken = async () => {
    try {
      const response = await fetch(
        "https://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "grant_type=client_credentials&client_id=ReIhixQNs4h7CZsyUxDMxUCwFUcGSduYFHQiAVa4214sGg2tKZ&client_secret=YnQdc5zjbjeV6B6JoupSGeqH90qgqfQsfTNuDF4B",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.access_token);
        // console.log('Access Token:', data.access_token);
      } else {
        throw new Error("Access token request failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      let searchQuery = "";

      // Check if searchTerm is a valid zip code
      const zipCodePattern = /^\d{5}(?:[-\s]\d{4})?$/;
      if (zipCodePattern.test(searchTerm)) {
        searchQuery = `location=${searchTerm}`;
      } else {
        // Assume searchTerm is either a city or state
        searchQuery = `city=${searchTerm}&state=${searchTerm}`;
      }

      const response = await fetch(
        `https://api.petfinder.com/v2/organizations?${searchQuery}`,
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
        throw new Error("Search request failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getFullAddress = (address) => {
    const { address1, address2, city, state, postcode, country } = address;
    let fullAddress = "";

    if (address1) {
      fullAddress += address1;
    }

    if (address2) {
      fullAddress += ` ${address2}`;
    }

    if (city) {
      fullAddress += ` ${city}`;
    }

    if (state) {
      fullAddress += `, ${state}`;
    }

    if (postcode) {
      fullAddress += `, ${postcode}`;
    }

    if (country) {
      fullAddress += ` ${country}`;
    }

    return fullAddress;
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="flex-row justify-center mt-5 mb-5">
      <div className="col-12 col-lg-7">
        <div className="card">
          <h4 className="shelter-header card-header p-3 justify-center text-center">
            Dog Shelter Search
          </h4>
          <div className="card-body shadow-lg">
            <form onSubmit={handleSearch}>
              <input
                className="form-input shadow-lg"
                placeholder="Please enter a state or zip code."
                name="search"
                type="text"
                value={searchTerm}
                onChange={handleChange}
              />
              <button
                className="btn btn-shelter btn-block fw-bolder fs-5"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Search
              </button>
            </form>

            {searchResults.length > 0 ? (
              <ul className="search-results mt-4 fw-bold text-center">
                {searchResults.map((organizations) => (
                  <li key={organizations.id}>
                    <h2>{organizations.name}</h2>
                    <p>{getFullAddress(organizations.address)}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="container">
                <div className="row mt-4 justify-content-center text-center">
                  <p className="error-message row col-11 fw-bolder rounded flex-direction-column fs-4 justify-content-center text-center">
                    No results found.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DogShelterSearch;
