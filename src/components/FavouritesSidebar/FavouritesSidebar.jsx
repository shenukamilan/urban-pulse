import React from 'react';
import { Trash2 } from 'lucide-react';
import FavouriteItem from '../FavouriteItem/FavouriteItem';
import './FavouritesSidebar.css';

const FavouritesSidebar = () => {
  // Temp data for layout testing
  const dummyFavs = [
    {
      id: "prop1",
      price: 750000,
      type: "House",
      bedrooms: 3,
      picture: "images/prop1pic1small.jpg",
      location: "Petts Wood Road, Petts Wood, Orpington BR5"
    },
    {
      id: "prop1",
      price: 750000,
      type: "House",
      bedrooms: 3,
      picture: "images/prop1pic1small.jpg",
      location: "Petts Wood Road, Petts Wood, Orpington BR5"
    },
    {
      id: "prop1",
      price: 750000,
      type: "House",
      bedrooms: 3,
      picture: "images/prop1pic1small.jpg",
      location: "Petts Wood Road, Petts Wood, Orpington BR5"
    },
    {
      id: "prop1",
      price: 750000,
      type: "House",
      bedrooms: 3,
      picture: "images/prop1pic1small.jpg",
      location: "Petts Wood Road, Petts Wood, Orpington BR5"
    },
    {
      id: "prop1",
      price: 750000,
      type: "House",
      bedrooms: 3,
      picture: "images/prop1pic1small.jpg",
      location: "Petts Wood Road, Petts Wood, Orpington BR5"
    }
  ];

  return (
    <div className="fav-sidebar-card">
      <div className="fav-header">
        <h3>Favourites ({dummyFavs.length})</h3>
        <button className="btn-clear">
          <Trash2 size={14} /> Clear All
        </button>
      </div>

      <div className="fav-list">
        {dummyFavs.length > 0 ? (
          dummyFavs.map((property) => (
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