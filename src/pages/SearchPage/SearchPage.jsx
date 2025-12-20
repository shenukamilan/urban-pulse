import React, { useState } from 'react';
import './SearchPage.css';
import SearchBox from '../../components/SearchBox/SearchBox';

const SearchPage = () => {
  const [formData, setFormData] = useState({
    type: null,
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    postcode: '',
    startDate: null
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching with these criteria:", formData);
    // Filtering will be added here later
  };

  const handleReset = () => {
    setFormData({
      type: null, minPrice: '', maxPrice: '', 
      minBedrooms: '', maxBedrooms: '', 
      postcode: '', startDate: null
    });
  };

  return (
    <div className="search-page-layout">
      <div className="search-main-column">
        <SearchBox 
          formData={formData} 
          setFormData={setFormData} 
          onSearch={handleSearch} 
          onReset={handleReset} 
        />
      </div>
      
      <aside className="search-sidebar-placeholder"></aside>
    </div>
  );
};

export default SearchPage;