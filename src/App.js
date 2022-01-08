import React from 'react';
import ImageGallery from './components/imageGallery';
import Title from './components/Title';
import UploadImage from './components/uploadImage';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadImage />
      <ImageGallery />
    </div>
  );
}

export default App;
