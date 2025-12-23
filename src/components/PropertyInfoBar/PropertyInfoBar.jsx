import React from 'react';
import { Heart } from 'lucide-react';
import './PropertyInfoBar.css';

const PropertyInfoBar = ({ property, isFavourite, onToggleFavorite }) => {

    return (
        <section className="info-bar-container">
            <div className="info-left-content">
                {/* Price */}
                <h2 className="info-price">£{property.price.toLocaleString()}</h2>

                {/* Metadata Line */}
                <p className="info-meta">
                    {property.type} • {property.bedrooms} Bedrooms • {property.tenure}
                </p>

                {/* Address Line */}
                <p className="info-address">{property.location}</p>
            </div>

            <div className="info-right-content">
                <button
                    className={`info-fav-btn ${isFavourite ? 'active' : ''}`}
                    onClick={() => onToggleFavorite(property.id)}
                >
                    <Heart
                        size={18}
                        fill={isFavourite ? "white" : "none"}
                        className="info-heart-icon"
                    />
                    <span>{isFavourite ? "Remove from Favourites" : "Add to Favourites"}</span>
                </button>
            </div>
        </section>
    );
};

export default PropertyInfoBar;