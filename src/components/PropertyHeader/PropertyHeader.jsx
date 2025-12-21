import React from 'react';
import { ChevronLeft } from 'lucide-react';
import './PropertyHeader.css';

const PropertyHeader = ({ location, onBack }) => {
  return (
    <div className="property-header-section">
      <div className="property-header-content">

        {/* Back navigation row */}
        <button onClick={onBack} className="back-nav-btn">
          <ChevronLeft size={16} />
          <span>Back to Search</span>
        </button>

        {/* Property Address Title */}
        <h1 className="property-title">{location}</h1>

      </div>
    </div>
  );
};

export default PropertyHeader;