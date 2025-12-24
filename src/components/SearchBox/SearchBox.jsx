import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Search } from 'lucide-react';
import './SearchBox.css';


const SearchBox = ({ filters, setfilters, onSearch, onReset }) => {
    return (
        <div className="search-card">
            <h2 className="search-title">Search Properties</h2>

            <form className="search-grid" onSubmit={onSearch}>

                {/* --- Row 1: Type, Location, Price Range --- */}

                <div className="field-group">
                    <label>Property Type</label>
                    <Select
                        placeholder="Any"
                        options={[
                            { value: 'any', label: 'Any' },
                            { value: 'House', label: 'House' },
                            { value: 'Flat', label: 'Flat' }
                        ]}
                        value={filters.type}
                        onChange={(value) => setfilters({ ...filters, type: value })}
                    />
                </div>

                <div className="field-group">
                    <label>Postcode Area</label>
                    <input
                        type="text"
                        placeholder="e.g. BR1, BR5"
                        value={filters.postcode}
                        onChange={(e) => setfilters({ ...filters, postcode: e.target.value })}
                    />
                </div>

                <div className="field-group">
                    <label>Min Price (£)</label>
                    <input
                        type="number"
                        placeholder="e.g. 200000"
                        value={filters.minPrice}
                        step="10000"
                        min="0"
                        onChange={(e) => setfilters({ ...filters, minPrice: e.target.value })}
                    />
                </div>

                <div className="field-group">
                    <label>Max Price (£)</label>
                    <input
                        type="number"
                        placeholder="e.g. 800000"
                        value={filters.maxPrice}
                        step="10000"
                        min="0"
                        onChange={(e) => setfilters({ ...filters, maxPrice: e.target.value })}
                    />
                </div>

                {/* --- Row 2: Bedrooms & Date --- */}

                <div className="field-group">
                    <label>Min Bedrooms</label>
                    <input
                        type="number"
                        placeholder="e.g. 2"
                        value={filters.minBedrooms}
                        min="1"
                        onChange={(e) => setfilters({ ...filters, minBedrooms: e.target.value })}
                    />
                </div>

                <div className="field-group">
                    <label>Max Bedrooms</label>
                    <input
                        type="number"
                        placeholder="e.g. 4"
                        value={filters.maxBedrooms}
                        min="1"
                        onChange={(e) => setfilters({ ...filters, maxBedrooms: e.target.value })}
                    />
                </div>

                <div className="field-group">
                    <label>Added After</label>
                    <DatePicker
                        selected={filters.startDate}
                        onChange={(date) => setfilters({ ...filters, startDate: date })}
                        placeholderText="mm/dd/yyyy"
                    />
                </div>

                {/* --- Action Buttons --- */}
                <div className="search-actions">
                    <button type="submit" className="btn-main-search">
                        <Search size={18} /> Search Properties
                    </button>

                    <button type="button" className="btn-reset" onClick={onReset}>
                        Reset
                    </button>
                </div>

            </form>
        </div>
    );
};

export default SearchBox;