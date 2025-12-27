import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, BedDouble } from 'lucide-react';
import { FavoritesContext } from '../../context/FavoritesContext';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {

  // Access global favorites state
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  // Check if this specific property is already saved
  const isLiked = isFavorite(property.id);

  // Handles the heart button click.
  const handleFavoriteClick = (e) => {
    e.preventDefault();  // Stop browser from following the link
    e.stopPropagation(); // Stop event from bubbling up to the Link component

    if (isLiked) {
      removeFavorite(property.id);
    } else {
      addFavorite(property.id);
    }
  };

  // Set the property ID on drag start to enable adding to favorites
  const handleDragStart = (e) => {
    e.dataTransfer.setData("propertyId", property.id);
  };

  return (
    <div className="prop-card-container" draggable="true" onDragStart={handleDragStart} >
      <Link to={`/property/${property.id}`} className="prop-card-link">
        <div className="prop-card">

          {/* Image Section with Overlay Button */}
          <div className="prop-image-wrapper">
            <img
              src={property.images[0]}
              alt={property.type}
              className="prop-image"
              loading="lazy"
            />

            <button
              className="heart-btn"
              onClick={handleFavoriteClick}
              aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                size={20}
                fill={isLiked ? "#490080" : "transparent"}
                color={isLiked ? "#490080" : "currentColor"}
              />
            </button>
          </div>

          {/* Content Section */}
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
      </Link>
    </div>

  );
};

export default PropertyCard;