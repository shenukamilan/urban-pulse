import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Search } from 'lucide-react';
import './SearchBox.css';


const SearchBox = ({ filters, setfilters, onSearch, onReset }) => {

    // Options for Property Dropdown
    const propertyOptions = [
        { value: 'Any', label: 'Any' },
        { value: 'House', label: 'House' },
        { value: 'Flat', label: 'Flat' }
    ];

    // Options for Bedrooms Dropdown
    const bedroomOptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
    ];

    // Options for Price Dropdown
    const priceOptions = [
        { value: '100000', label: '£100,000' },
        { value: '200000', label: '£200,000' },
        { value: '300000', label: '£300,000' },
        { value: '400000', label: '£400,000' },
        { value: '500000', label: '£500,000' },
        { value: '600000', label: '£600,000' },
        { value: '700000', label: '£700,000' },
        { value: '800000', label: '£800,000' },
        { value: '900000', label: '£900,000' },
        { value: '1000000', label: '£1,000,000' }
    ];
    return (
        <div className="search-card">
            <h2 className="search-title">Search Properties</h2>

            <form className="search-grid" onSubmit={onSearch}>

                {/* --- Row 1: Type, Location, Price Range --- */}

                <div className="field-group">
                    <label>Property Type</label>
                    <Select
                        placeholder="Any"
                        options={propertyOptions}
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
                    <Select
                        placeholder="No min"
                        options={priceOptions}
                        value={filters.minPrice}
                        onChange={(value) => setfilters({ ...filters, minPrice: value })}
                    />
                </div>

                <div className="field-group">
                    <label>Max Price (£)</label>
                    <Select
                        placeholder="No max"
                        options={priceOptions}
                        value={filters.maxPrice}
                        onChange={(value) => setfilters({ ...filters, maxPrice: value })}
                    />
                </div>

                {/* --- Row 2: Bedrooms & Date --- */}

                <div className="field-group">
                    <label>Min Bedrooms</label>
                    <Select
                        placeholder="No min"
                        options={bedroomOptions}
                        value={filters.minBedrooms}
                        onChange={(value) => setfilters({ ...filters, minBedrooms: value })}
                    />
                </div>

                <div className="field-group">
                    <label>Max Bedrooms</label>
                    <Select
                        placeholder="No max"
                        options={bedroomOptions}
                        value={filters.maxBedrooms}
                        onChange={(value) => setfilters({ ...filters, maxBedrooms: value })}
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