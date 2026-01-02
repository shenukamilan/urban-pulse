import React, { useContext, useState } from 'react';
import './SearchPage.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import FavouritesSidebar from '../../components/FavouritesSidebar/FavouritesSidebar';
import Header from '../../components/Header/header';
import { PropertiesContext } from '../../context/PropertiesContext';
import { FavoritesContext } from '../../context/FavoritesContext';

const SearchPage = () => {

    // Access global state for properties data
    const { properties } = useContext(PropertiesContext);

    // Access global state for removeFavorite  
    const { removeFavorite } = useContext(FavoritesContext);

    // State to hold the current values of the form inputs
    const [filters, setfilters] = useState({
        type: null,
        minPrice: null,
        maxPrice: null,
        minBedrooms: null,
        maxBedrooms: null,
        postcode: '',
        startDate: null
    });

    // State to hold the filters that are  applied to the list
    // Ensures the list doesn't update until the user clicks "Search"
    const [appliedFilters, setAppliedFilters] = useState(filters);

    // Apply the current form values to the search results
    const handleSearch = (e) => {
        if (e) e.preventDefault();
        setAppliedFilters(filters);
    };

    // Reset both the form inputs and the applied search results
    const handleReset = () => {
        const resetState = {
            type: null,
            minPrice: null,
            maxPrice: null,
            minBedrooms: null,
            maxBedrooms: null,
            postcode: '',
            startDate: null
        };
        setfilters(resetState);
        setAppliedFilters(resetState);
    };

    const getValue = (input) => {
        // Check if the input is empty (null or undefined)
        if (!input) {
            return null;
        }

        // Check if the input is an object that has a "value" property for react select
        if (input.value) {
            return input.value;
        }

        // Check if it's just a regular string or number from text inputs
        else {
            return input;
        }
    };

    // Filtering Logic based on 'Applied Filters'
    const filteredProperties = properties.filter((property) => {
        const { type, minPrice, maxPrice, minBedrooms, maxBedrooms, startDate, postcode } = appliedFilters;

        // 1. Property Type
        const typeVal = getValue(type);
        if (typeVal && typeVal !== "Any" && property.type !== typeVal) return false;

        // 2. Price Range 
        const minPriceVal = getValue(minPrice);
        const maxPriceVal = getValue(maxPrice);
        if (minPriceVal && property.price < Number(minPriceVal)) return false;
        if (maxPriceVal && property.price > Number(maxPriceVal)) return false;

        // 3. Bedroom Count
        const minBedVal = getValue(minBedrooms);
        const maxBedVal = getValue(maxBedrooms);
        if (minBedVal && property.bedrooms < Number(minBedVal)) return false;
        if (maxBedVal && property.bedrooms > Number(maxBedVal)) return false;

        // 4. Date Added
        if (startDate) {
            if (!property.added) return false; // Safety check for missing dates
            const addedDate = new Date(property.added.year, new Date(`${property.added.month} 1`).getMonth(), property.added.day);
            if (addedDate < startDate) return false;
        }

        // 5. Postcode
        if (postcode && !property.location.toUpperCase().includes(postcode.toUpperCase())) return false;

        return true;
    });

    // Allow dropping by preventing default behavior
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Handle drop to remove the item from favorites
    const handleDrop = (e) => {
        e.preventDefault();
        const removeId = e.dataTransfer.getData("removeId");
        if (removeId) {
            removeFavorite(removeId);
        }
    };

    return (
        <>
            <Header />
            <div className="search-page-layout">
                {/* --- Left Column: Search Form & Results --- */}
                <div
                    className="search-main-column"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}>
                    <SearchBox
                        filters={filters}
                        setfilters={setfilters}
                        onSearch={handleSearch}
                        onReset={handleReset}
                    />

                    <div className="properties-grid">
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map((property) => (
                                <PropertyCard key={property.id} property={property} />
                            ))
                        ) : (
                            /* Empty State Feedback */
                            <div className="no-results-state">
                                <h3>No matching properties</h3>
                                <p>Try adjusting your search filters to find what you're looking for.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* --- Right Column: Favourites Sidebar --- */}
                <aside className="favourites-sidebar">
                    <FavouritesSidebar />
                </aside>
            </div>
        </>
    );
};

export default SearchPage;