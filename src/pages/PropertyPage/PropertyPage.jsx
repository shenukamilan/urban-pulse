import React from 'react'
import propertiesData from "../../data/properties.json"
import PropertyHeader from '../../components/PropertyHeader/PropertyHeader';
import PropertyInfoBar from '../../components/PropertyInfoBar/PropertyInfoBar';
import './PropertyPage.css';
import ImageGallery from '../../components/PropertyGallery/PropertyGallery';
import PropertyTabs from '../../components/PropertyTabs/PropertyTabs';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/Header/header';


const PropertyPage = () => {

  const { id } = useParams();

  const currentProperty = propertiesData.properties.find((p) => String(p.id) === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
  
  return (
    <>

      <PropertyHeader
        location={currentProperty.location}
        onBack={() => console.log("Go back")}
      />
      <div className="property-page-layout">
        <ImageGallery
          images={currentProperty.images}
        />
        <PropertyInfoBar
          property={currentProperty}
          isFavourite={true}
        />
        <PropertyTabs
          property={currentProperty}
        />
      </div>

    </>
  )
};

export default PropertyPage