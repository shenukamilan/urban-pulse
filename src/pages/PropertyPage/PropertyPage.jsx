import React from 'react'
import propertiesData from "../../data/properties.json"
import PropertyHeader from '../../components/PropertyHeader/PropertyHeader';


function PropertyPage() {

  let property = propertiesData.properties[0];
  return (
    <>
      <PropertyHeader
        location={property.location}
        onBack={() => console.log("Go back")}
      />
    </>
  )
}

export default PropertyPage