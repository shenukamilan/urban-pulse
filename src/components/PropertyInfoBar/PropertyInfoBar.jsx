import React, { useContext } from 'react';
import { Heart } from 'lucide-react';
import { FavoritesContext } from '../../context/FavoritesContext';
import './PropertyInfoBar.css';

const PropertyInfoBar = ({ property }) => {

    // Access global state functions
    const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

    // Check if this specific property is currently saved
    const isLiked = isFavorite(property.id);

    //  Handles the favorite toggle
    const handleToggle = () => {
        if (isLiked) {
            removeFavorite(property.id);
        } else {
            addFavorite(property.id);
        }
    };

    return (
        <section className="info-bar-container">

            {/* Left Side: Property Details */}
            <div className="info-left-content">
                {/* Price */}
                <h2 className="info-price">£{property.price.toLocaleString()}</h2>

                {/* Property Metadata (Type, Bedrooms, Tenure) */}
                <p className="info-meta">
                    {property.type} • {property.bedrooms} Bedrooms • {property.tenure}
                </p>

                {/* Address */}
                <p className="info-address">{property.location}</p>
            </div>

            {/* Right Side: Action Button */}
            <div className="info-right-content">
                <button
                    // Dynamically add 'active' class if the item is favorite
                    className={`info-fav-btn ${isLiked ? 'active' : ''}`}
                    onClick={handleToggle}
                >
                    <Heart
                        size={18}
                        // Fill white if active, otherwise transparent (outline only)
                        fill={isLiked ? "white" : "none"}
                        className="info-heart-icon"
                    />
                    <span>{isLiked ? "Remove from Favourites" : "Add to Favourites"}</span>
                </button>
            </div>

        </section>
    );
};

export default PropertyInfoBar;