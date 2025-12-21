import React from 'react'
import propertiesData from "../../data/properties.json"
import PropertyHeader from '../../components/PropertyHeader/PropertyHeader';
import PropertyInfoBar from '../../components/PropertyInfoBar/PropertyInfoBar';
import './PropertyPage.css';


function PropertyPage() {

  let currentProperty = propertiesData.properties[0];
  return (
    <>

      <PropertyHeader
        location={currentProperty.location}
        onBack={() => console.log("Go back")}
      />
      <div className="property-page-layout">
        <PropertyInfoBar
          property={currentProperty}
          isFavourite={true}
        />
      </div>

    </>
  )
}

export default PropertyPage