import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './PropertyGallery.css';

const PropertyGallery = ({ images }) => {

  const galleryItems = images.map((image) => {
    return {
      original: image,
      thumbnail: image
    };
  });

  return (
    <div className="gallery">
      <ImageGallery
        items={galleryItems}
        showPlayButton={false}
        showIndex={true}
        showFullscreenButton={true}
      />
    </div>
  );
};

export default PropertyGallery;