import React from 'react';
import { X } from 'lucide-react';
import './FavouriteItem.css'

const FavouriteItem = ({ item }) => {
  return (
    <div className="fav-item">
      <div className="fav-thumb-container">
        <img
          src={item.images[1]}
          alt={item.type}
          className="fav-thumb"
        />
      </div>

      <div className="fav-info">
        <h4>£{item.price.toLocaleString()}</h4>
        <p>{item.bedrooms} bed {item.type}</p>
        <p className="fav-loc-text">{item.location.substring(0, 25)}...</p>
      </div>

      <button className="fav-remove-btn" title="Remove from favourites">
        <X size={14} />
      </button>
    </div>
  );
};

export default FavouriteItem;