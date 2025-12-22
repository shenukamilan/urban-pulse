import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PropertyHeader.css';

const PropertyHeader = ({ location }) => {
  return (
    <div className="property-header-section">
      <div className="property-header-content">

        {/* Back navigation row */}
        <Link to="/" className="back-nav-btn">
            <ChevronLeft size={16} />
            <span>Back to Search</span>
        </Link>

        {/* Property Address Title */}
        <h1 className="property-title">{location}</h1>

      </div>
    </div>
  );
};

export default PropertyHeader;