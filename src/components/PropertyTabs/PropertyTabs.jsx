import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default library styles
import './PropertyTabs.css';

const PropertyTabs = ({ property }) => {

    //Google Maps Embed URL based on the property location
    const googleMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`;

    return (
        <div className="tabs-container">
            <Tabs>

                {/* Tab Navigation Bar */}
                <TabList className="custom-tab-list">
                    <Tab>Description</Tab>
                    <Tab>Floor Plan</Tab>
                    <Tab>Map</Tab>
                </TabList>

                {/* Tab 1 Description & Key Details */}
                <TabPanel>
                    <div className="tab-content">

                        {/* Main Description */}
                        <h3 className="section-title">Property Description</h3>
                        <p className="desc-text">
                            {property.description}
                        </p>

                        <hr className="divider" />

                        {/* Key Stats Grid */}
                        <h3 className="section-title">Key Details</h3>
                        <div className="details-grid">

                            <div className="detail-item">
                                <span className="label">Property Type</span>
                                <span className="value">{property.type}</span>
                            </div>

                            <div className="detail-item">
                                <span className="label">Bedrooms</span>
                                <span className="value">{property.bedrooms}</span>
                            </div>

                            <div className="detail-item">
                                <span className="label">Tenure</span>
                                <span className="value">{property.tenure}</span>
                            </div>

                            <div className="detail-item">
                                <span className="label">Date Added</span>
                                <span className="value">{property.added.month} {property.added.day}, {property.added.year}</span>
                            </div>

                        </div>
                    </div>
                </TabPanel>

                {/* Tab 2 Floor Plan Image */}
                <TabPanel>
                    <div className="tab-content">
                        <img
                            className="property-floor-image"
                            src={property.picture}
                            alt={`${property.type} Floor Plan`}
                            loading="lazy"
                        />
                    </div>
                </TabPanel>

                {/* Tab 3 Google Map Embed */}
                <TabPanel>
                    <div className="tab-content">
                        <iframe
                            title="Property Location"
                            className="property-google-map"
                            src={googleMapsUrl}
                            loading="lazy"
                        ></iframe>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default PropertyTabs;