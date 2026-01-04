import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PropertyHeader from '../../components/PropertyHeader/PropertyHeader';
import PropertyInfoBar from '../../components/PropertyInfoBar/PropertyInfoBar';
import PropertyGallery from '../../components/PropertyGallery/PropertyGallery';
import PropertyTabs from '../../components/PropertyTabs/PropertyTabs';
import { PropertiesContext } from '../../context/PropertiesContext';


import './PropertyPage.css';

const PropertyPage = () => {

  // Access global state for properties data
  const { properties } = useContext(PropertiesContext);

  // Get the 'id' parameter from the URL 
  const { id } = useParams();

  // Search the JSON data to find the matching property object
  const currentProperty = properties.find((p) => String(p.id) === id);

  // Scroll to top whenever the property ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle invalid IDs 
  if (!currentProperty) {
    return (
      <>
        <Header />
        <div className="property-not-found">
          <h1>Property Not Found</h1>
          <p>We couldn't find the property you're looking for.</p>
        </div>
      </>
    );
  }

  // Render the full property layout
  return (
    <>
      {/* Property Page Header */}
      <PropertyHeader
        location={currentProperty.location}
      />

      <div className="property-page-layout">

        {/* Slideshow of images */}
        <PropertyGallery
          images={currentProperty.images}
        />

        {/* Price, Metadata, and Favorite Button */}
        <PropertyInfoBar
          property={currentProperty}
        />

        {/* Tab content: Description, Floorplan, Map */}
        <PropertyTabs
          property={currentProperty}
        />

      </div>
    </>
  );
};

export default PropertyPage;