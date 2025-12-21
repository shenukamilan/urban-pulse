import React from 'react';
import { Trash2 } from 'lucide-react';
import FavouriteItem from '../FavouriteItem/FavouriteItem';
import './FavouritesSidebar.css';
import propertiesData from "../../data/properties.json";

const FavouritesSidebar = () => {
  // Temp data for layout testing
  const tempFavs = propertiesData.properties
 
  return (
    <div className="fav-sidebar-card">
      <div className="fav-header">
        <h3>Favourites ({tempFavs.length})</h3>
        <button className="btn-clear">
          <Trash2 size={14} /> Clear All
        </button>
      </div>

      <div className="fav-list">
        {tempFavs.length > 0 ? (
          tempFavs.map((property) => (
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