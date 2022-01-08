import React, {useState} from 'react';
import ImageGallery from './components/imageGallery';
import Modal from './components/modal';
import Title from './components/Title';
import UploadImage from './components/uploadImage';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadImage />
      <ImageGallery setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
