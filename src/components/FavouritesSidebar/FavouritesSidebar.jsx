import React, { useContext } from 'react';
import { Trash2 } from 'lucide-react';
import FavouriteItem from '../FavouriteItem/FavouriteItem';
import './FavouritesSidebar.css';
import { FavoritesContext } from '../../context/FavoritesContext';
import { PropertiesContext } from '../../context/PropertiesContext';

const FavouritesSidebar = () => {

  // Access global state for properties data
  const { properties } = useContext(PropertiesContext);

  // Access global state for favorites list and functions
  const { favorites, clearFavorites, addFavorite } = useContext(FavoritesContext);

  // Map stored IDs back to full property objects
  const savedProperties = favorites
    .map((favId) => properties.find((p) => String(p.id) === favId))
    .filter(property => property !== undefined);

  // --- Drag & Drop Handlers ---
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const propertyId = e.dataTransfer.getData("propertyId");
    if (propertyId) {
      addFavorite(propertyId);
    }
  };

  return (
    <div
      className="fav-sidebar-card"
      onDragOver={handleDragOver}
      onDrop={handleDrop}>

      {/* Header section with count and clear button */}
      <div className="fav-header">
        <h3>Favourites ({savedProperties.length})</h3>
        <button className="btn-clear" onClick={clearFavorites} title="Clear all favorites">
          <Trash2 size={14} /> Clear All
        </button>
      </div>

      {/* List of property cards */}
      <div className="fav-list">
        {savedProperties.length > 0 ? (
          savedProperties.map((property) => (
            <FavouriteItem key={property.id} item={property} />
          ))
        ) : (
          <p className="fav-empty-msg">No properties saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavouritesSidebar;