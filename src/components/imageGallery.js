import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGallery = () => {
    const { docs } = useFirestore('images');
    console.log(docs);
    return (
        <div className="img-grid">
        {docs && docs.map(doc => (
          <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt='Image' />
          </div>
        ))}
      </div>
    )
}

export default ImageGallery;
