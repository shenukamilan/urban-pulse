import React, { useContext } from 'react';
import { Trash2 } from 'lucide-react';
import FavouriteItem from '../FavouriteItem/FavouriteItem';
import './FavouritesSidebar.css';
import propertiesData from "../../data/properties.json";
import { FavoritesContext } from '../../context/FavoritesContext';


const FavouritesSidebar = () => {

  const { favorites, clearFavorites } = useContext(FavoritesContext);

  const savedProperties = favorites
    .map((favId) => propertiesData.properties.find((p) => String(p.id) === favId))
    .filter((item) => item !== undefined); // Safety check in case an ID is invalid

  return (
    <div className="fav-sidebar-card">
      <div className="fav-header">
        <h3>Favourites ({savedProperties.length})</h3>
        <button className="btn-clear" onClick={clearFavorites}>
          <Trash2 size={14} /> Clear All
        </button>
      </div>

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