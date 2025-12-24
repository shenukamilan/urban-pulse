import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import propertiesData from "../../data/properties.json";

// Component Imports
import Header from '../../components/Header/header';
import PropertyHeader from '../../components/PropertyHeader/PropertyHeader';
import PropertyInfoBar from '../../components/PropertyInfoBar/PropertyInfoBar';
import ImageGallery from '../../components/PropertyGallery/PropertyGallery';
import PropertyTabs from '../../components/PropertyTabs/PropertyTabs';

import './PropertyPage.css';

const PropertyPage = () => {

  // Get the 'id' parameter from the URL 
  const { id } = useParams();

  // Search the JSON data to find the matching property object
  const currentProperty = propertiesData.properties.find((p) => String(p.id) === id);

  // UX Improvement: Scroll to top whenever the property ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle invalid IDs (Safety Check)
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
      {/* Top Header with Back Button and Address */}
      <PropertyHeader
        location={currentProperty.location}
        onBack={() => console.log("Go back")}
      />

      <div className="property-page-layout">

        {/* Slideshow of images */}
        <ImageGallery
          images={currentProperty.images}
        />

        {/* Price, Metadata, and Favorite Button */}
        <PropertyInfoBar
          property={currentProperty}
        />

        {/* Tabbed content: Description, Floorplan, Map */}
        <PropertyTabs
          property={currentProperty}
        />

      </div>
    </>
  );
};

export default PropertyPage;