import React, { useContext } from 'react';
import { Heart, MapPin, BedDouble } from 'lucide-react';
import './PropertyCard.css';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../context/FavoritesContext';

const PropertyCard = ({ property }) => {

  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  // 3. Check if THIS specific house is already in the list
  const isLiked = isFavorite(property.id);


  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Prevents the Link navigation
    e.stopPropagation(); // Stops the click from bubbling up

    if (isLiked) {
      removeFavorite(property.id);
    } else {
      addFavorite(property.id);
    }
  };

  return (
    <>
      <Link to={`/property/${property.id}`} className="prop-card-link">
        <div className="prop-card">
          <div className="prop-image-wrapper">
            <img src={property.images[0]} alt={property.type} className="prop-image" />
            <button className="heart-btn" onClick={handleFavoriteClick}>
              <Heart
                size={20}
                fill={isLiked ? "#490080" : "transparent"}
                color={isLiked ? "#490080" : "currentColor"}
              />
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
      </Link>
    </>

  );
};

export default PropertyCard;