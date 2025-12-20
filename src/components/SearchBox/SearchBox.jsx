import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Search } from 'lucide-react';
import './SearchBox.css';

const SearchBox = ({ formData, setFormData, onSearch, onReset }) => {
    return (
        <div className="search-card">
            <h2 className="search-title">Search Properties</h2>

            <form className="search-grid" onSubmit={onSearch}>

                {/* Row 1 */}
                <div className="field-group">
                    <label>Property Type</label>
                    <Select
                        placeholder="Any"
                        options={[{ value: 'any', label: 'Any' }, { value: 'House', label: 'House' }, { value: 'Flat', label: 'Flat' }]}
                        onChange={(opt) => setFormData({ ...formData, type: opt.value })}
                    />
                </div>

                <div className="field-group">
                    <label>Postcode Area</label>
                    <input
                        type="text"
                        placeholder="e.g. BR1, BR5"
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    />
                </div>

                <div className="field-group">
                    <label>Min Price (£)</label>
                    <input
                        type="number"
                        placeholder="e.g. 200000"
                        step="10000"
                        min="0"
                        onChange={(e) => setFormData({ ...formData, minPrice: e.target.value })}
                    />
                </div>

                <div className="field-group">
                    <label>Max Price (£)</label>
                    <input
                        type="number"
                        placeholder="e.g. 800000"
                        step="10000"
                        min="0"
                        onChange={(e) => setFormData({ ...formData, maxPrice: e.target.value })}
                    />
                </div>

                {/* Row 2 */}


                <div className="field-group">
                    <label>Min Bedrooms</label>
                    <input
                        type="number"
                        placeholder="e.g. 2"
                        min="0"
                        onChange={(e) => setFormData({ ...formData, minBedrooms: e.target.value })}
                    />
                </div>

                <div className="field-group">
                    <label>Max Bedrooms</label>
                    <input
                        type="number"
                        placeholder="e.g. 2"
                        min="0"
                        onChange={(e) => setFormData({ ...formData, maxBedrooms: e.target.value })}
                    />
                </div>



                <div className="field-group">
                    <label>Added After</label>
                    <DatePicker
                        selected={formData.startDate}
                        onChange={(date) => setFormData({ ...formData, startDate: date })}
                        placeholderText="mm/dd/yyyy"
                    />
                </div>

                {/* Action Buttons Row */}
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