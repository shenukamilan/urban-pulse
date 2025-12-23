import React, { useState } from 'react';
import './SearchPage.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import propertiesData from "../../data/properties.json";
import FavouritesSidebar from '../../components/FavouritesSidebar/FavouritesSidebar';
import Header from '../../components/Header/header';

const SearchPage = () => {
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
        if (e) e.preventDefault();
        setAppliedFilters(filters);
    };

    const handleReset = () => {
        setfilters({
            type: null, minPrice: '', maxPrice: '',
            minBedrooms: '', maxBedrooms: '',
            postcode: '', startDate: null
        });
        setAppliedFilters({
            type: null, minPrice: '', maxPrice: '',
            minBedrooms: '', maxBedrooms: '',
            postcode: '', startDate: null
        });
    };

    const filteredProperties = propertiesData.properties.filter((property) => {
        const { type, minPrice, maxPrice, minBedrooms, maxBedrooms, startDate, postcode } = appliedFilters;

        if (type && type.value !== "any" && property.type !== type.value) return false;
        if (minPrice && property.price < Number(minPrice)) return false;
        if (maxPrice && property.price > Number(maxPrice)) return false;
        if (minBedrooms && property.bedrooms < Number(minBedrooms)) return false;
        if (maxBedrooms && property.bedrooms > Number(maxBedrooms)) return false;
        if (startDate) {
            const addedDate = new Date(property.added.year, new Date(`${property.added.month} 1`).getMonth(), property.added.day);
            if (addedDate < startDate) return false;
        }
        if (postcode && !property.location.toUpperCase().includes(postcode.toUpperCase())) return false;

        return true;
    });

    return (
        <>
            <Header />
            <div className="search-page-layout">
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
                            <div className="no-results-state">
                                <h3>No matching properties</h3>
                                <p>Try adjusting your search filters to find what you're looking for.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* SIDEBAR FOR FAVOURITES (Reserved Space) */}
                <aside className="search-sidebar-placeholder">
                    <FavouritesSidebar />
                </aside>
            </div>
        </>
    );
};

export default SearchPage;