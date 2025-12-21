import React from 'react'
import propertiesData from "../../data/properties.json"
import PropertyHeader from '../../components/PropertyHeader/PropertyHeader';
import PropertyInfoBar from '../../components/PropertyInfoBar/PropertyInfoBar';
import './PropertyPage.css';
import ImageGallery from '../../components/PropertyGallery/PropertyGallery';
import PropertyTabs from '../../components/PropertyTabs/PropertyTabs';


function PropertyPage() {

  let currentProperty = propertiesData.properties[0];
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
}

export default PropertyPage