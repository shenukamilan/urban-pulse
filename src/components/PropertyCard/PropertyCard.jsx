import React from 'react';
import { Heart, MapPin, BedDouble } from 'lucide-react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="prop-card">
      <div className="prop-image-wrapper">
        <img src={property.images[0]} alt={property.type} className="prop-image" />
        <button className="heart-btn">
          <Heart size={20} />
        </button>
      </div>

      <div className="prop-content">
        <h2 className="prop-price">£{property.price.toLocaleString()}</h2>
        
        <div className="prop-specs">
          <BedDouble size={18} className="prop-icon" /> 
          <span>{property.bedrooms} bed {property.type}</span>
        </div>

        <div className="prop-location">
          <MapPin size={16} className="prop-icon" /> 
          <span>{property.location}</span>
        </div>

        <p className="prop-description">
          {property.description.substring(0, 232)}...
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;