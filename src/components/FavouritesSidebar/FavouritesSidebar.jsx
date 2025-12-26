import React, { useContext } from 'react';
import { Trash2 } from 'lucide-react';
import FavouriteItem from '../FavouriteItem/FavouriteItem';
import './FavouritesSidebar.css';
import { FavoritesContext } from '../../context/FavoritesContext';
import { PropertiesContext } from '../../context/PropertiesContext';

const FavouritesSidebar = () => {

  // Access global state for properties data
  const { properties } = useContext(PropertiesContext);

  // Access global state for favorites list and clear function
  const { favorites, clearFavorites } = useContext(FavoritesContext);

  // Map stored IDs back to full property objects.
  const savedProperties = favorites
    .map((favId) => properties.find((p) => String(p.id) === favId))
    .filter((item) => item !== undefined); // Remove undefined items if an ID is invalid

  return (
    <div className="fav-sidebar-card">

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