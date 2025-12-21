import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import './PropertyTabs.css'; 

const PropertyTabs = ({ property }) => {
    return (
        <div className="tabs-container">
            <Tabs>

                {/* The Top Navigation Bar */}
                <TabList className="custom-tab-list">
                    <Tab>Description</Tab>
                    <Tab>Floor Plan</Tab>
                    <Tab>Map</Tab>
                </TabList>

                <TabPanel>
                    <div className="tab-content">

                        {/* Description Text */}
                        <h3 className="section-title">Property Description</h3>
                        <p className="desc-text">
                            {property.description}
                        </p>

                        {/* The Divider Line */}
                        <hr className="divider" />

                        {/* Key Details Grid */}
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
                                <span className="value">September 14, 2022</span>
                            </div>

                        </div>

                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="tab-content">
                        <img
                            className="property-floor-image"
                            src={property.picture}
                            alt={property.type}
                        />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="tab-content">
                        <iframe
                            title="Property Location"
                            className="property-google-map"
                            loading="lazy"
                            src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
                        ></iframe>
                    </div>
                </TabPanel>

            </Tabs>
        </div >
    );
};

export default PropertyTabs;