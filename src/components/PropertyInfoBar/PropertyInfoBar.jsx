import React, { useContext } from 'react';
import { Heart } from 'lucide-react';
import './PropertyInfoBar.css';
import { FavoritesContext } from '../../context/FavoritesContext';

const PropertyInfoBar = ({ property }) => {

    const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

    const isLiked = isFavorite(property.id);

    const handleToggle = () => {
        if (isLiked) {
            removeFavorite(property.id);
        } else {
            addFavorite(property.id);
        }
    };

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
                    className={`info-fav-btn ${isLiked ? 'active' : ''}`}
                    onClick={handleToggle}
                >
                    <Heart
                        size={18}
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