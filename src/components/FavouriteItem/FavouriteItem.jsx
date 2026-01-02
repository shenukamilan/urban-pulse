import React, { useContext } from 'react';
import { X } from 'lucide-react';
import './FavouriteItem.css'
import { FavoritesContext } from '../../context/FavoritesContext';
import { Link } from 'react-router-dom';

const FavouriteItem = ({ item }) => {

  // Access global state to handle removal of favorites
  const { removeFavorite } = useContext(FavoritesContext);

  // Store the item ID to identify the dragged element
  const handleDragStart = (e) => {
    e.dataTransfer.setData("removeId", item.id);
  };

  return (
    <div
      className="fav-item"
      draggable="true"
      onDragStart={handleDragStart}>

      {/* Navigation link to the full property details page */}
      <Link to={`/property/${item.id}`}>
        <div className="fav-thumb-container">
          <img
            src={item.images[0]}
            alt={item.type}
            className="fav-thumb"
          />
        </div>
      </Link>

      {/* Property metadata */}
      <div className="fav-info">
        <h4>£{item.price.toLocaleString()}</h4>
        <p>{item.bedrooms} bed {item.type}</p>
        <p className="fav-loc-text">{item.location.substring(0, 25)}</p>
      </div>

      {/* Quick removal button */}
      <button className="fav-remove-btn" title="Remove from favourites" onClick={() => removeFavorite(item.id)}>
        <X size={14} />
      </button>
    </div>
  );
};

export default FavouriteItem;