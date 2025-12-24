import React, { useState } from 'react';
import './SearchPage.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import propertiesData from "../../data/properties.json";
import FavouritesSidebar from '../../components/FavouritesSidebar/FavouritesSidebar';
import Header from '../../components/Header/header';

const SearchPage = () => {
    // State to hold the current values of the form inputs
    const [filters, setfilters] = useState({
        type: null,
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        maxBedrooms: '',
        postcode: '',
        startDate: null
    });

    // State to hold the filters that are actually applied to the list
    // This separation ensures the list doesn't update until the user clicks "Search"
    const [appliedFilters, setAppliedFilters] = useState(filters);

    // Apply the current form values to the search results
    const handleSearch = (e) => {
        if (e) e.preventDefault();
        setAppliedFilters(filters);
    };

    // Reset both the form inputs and the applied search results
    const handleReset = () => {
        const resetState = {
            type: null, minPrice: '', maxPrice: '',
            minBedrooms: '', maxBedrooms: '',
            postcode: '', startDate: null
        };
        setfilters(resetState);
        setAppliedFilters(resetState);
    };

    // Filtering Logic based on 'appliedFilters'
    const filteredProperties = propertiesData.properties.filter((property) => {
        const { type, minPrice, maxPrice, minBedrooms, maxBedrooms, startDate, postcode } = appliedFilters;

        // Property Type (House, Flat, etc.)
        if (type && type.value !== "any" && property.type !== type.value) return false;

        // Price Range
        if (minPrice && property.price < Number(minPrice)) return false;
        if (maxPrice && property.price > Number(maxPrice)) return false;

        // Bedroom Count
        if (minBedrooms && property.bedrooms < Number(minBedrooms)) return false;
        if (maxBedrooms && property.bedrooms > Number(maxBedrooms)) return false;

        // Date Added 
        if (startDate) {
            const addedDate = new Date(property.added.year, new Date(`${property.added.month} 1`).getMonth(), property.added.day);
            if (addedDate < startDate) return false;
        }

        // Postcode
        if (postcode && !property.location.toUpperCase().includes(postcode.toUpperCase())) return false;

        return true;
    });

    return (
        <>
            <Header />
            <div className="search-page-layout">

                {/* --- Left Column: Search Form & Results --- */}
                <div className="search-main-column">
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