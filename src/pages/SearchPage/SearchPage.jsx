import React, { useState } from 'react';
import './SearchPage.css';
import SearchBox from '../../components/SearchBox/SearchBox';

import propertiesData from "../../data/properties.json";


const SearchPage = () => {
    // Draft (editable) filters

    const [filters, setfilters] = useState({
        type: null,
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        maxBedrooms: '',
        postcode: '',
        startDate: null
    });

    const [appliedFilters, setAppliedFilters] = useState(filters);


    const handleSearch = (e) => {
        if (e) e.preventDefault(); // This stops the page from refreshing!
        setAppliedFilters(filters)
    };

    const handleReset = () => {
        setfilters({
            type: null, minPrice: '', maxPrice: '',
            minBedrooms: '', maxBedrooms: '',
            postcode: '', startDate: null
        });
    };

    const filteredProperties = propertiesData.properties.filter((property) => {
        // FIX: Match the names exactly to your 'filters' state object
        const {
            type,
            minPrice,
            maxPrice,
            minBedrooms, // Changed from minBeds
            maxBedrooms, // Changed from maxBeds
            startDate,
            postcode
        } = appliedFilters;

        // 1. Property Type
        if (type && type.value !== "any" && property.type !== type.value) {
            return false;
        }

        // 2. Price Filters
        if (minPrice && property.price < Number(minPrice)) return false;
        if (maxPrice && property.price > Number(maxPrice)) return false;

        // 3. Bedroom Filters (Using fixed names)
        if (minBedrooms && property.bedrooms < Number(minBedrooms)) return false;
        if (maxBedrooms && property.bedrooms > Number(maxBedrooms)) return false;

        // 4. Date Logic
        if (startDate) {
            const addedDate = new Date(
                property.added.year,
                new Date(`${property.added.month} 1`).getMonth(),
                property.added.day
            );
            if (addedDate < startDate) return false;
        }

        // 5. Postcode Logic (using .includes for better search)
        if (postcode && !property.location.toUpperCase().includes(postcode.toUpperCase())) {
            return false;
        }

        return true;
    });


    return (
        <div className="search-page-layout">
            <div className="search-main-column">
                <SearchBox
                    filters={filters}
                    setfilters={setfilters}
                    onSearch={handleSearch}
                    onReset={handleReset}
                />
            </div>

            <div>
                <h2>Filtered Properties ({filteredProperties.length} found)</h2>
                
                {filteredProperties.length > 0 ? (
                    <ul>
                        {filteredProperties.map((property) => (
                            <li key={property.id} style={{ marginBottom: '20px', listStyle: 'none'}}>
                                <strong>ID:</strong> {property.id} <br />
                                <strong>Location:</strong> {property.location} <br />
                                <strong>Price:</strong> £{property.price.toLocaleString()} <br />
                                <strong>Type:</strong> {property.type} <br />
                                <strong>Bedrooms:</strong> {property.bedrooms} <br />
                                <strong>Added:</strong> {property.added.day} {property.added.month} {property.added.year}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No properties match your current search.</p>
                )}
            </div>

            <aside className="search-sidebar-placeholder"></aside>
        </div>
    );
};

export default SearchPage;