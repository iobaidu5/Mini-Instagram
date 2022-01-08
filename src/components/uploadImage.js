import React, { useState } from 'react'
import ProgressBar from './progressBar';

const UploadImage = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null)

    const types = ["image/png", "image/jpeg", "image/jpg"];

    const changeHandler = (e) => {
        let selectedImage = e.target.files[0];
        
        if (selectedImage && types.includes(selectedImage.type)){
            setFile(selectedImage);
            setError("");
        } else {
            setFile(null);
            setError("Please select valid image file (png, jpeg, jpg)");
        }
    }
    return (
        <form>
        <label>
            <input type='file' onChange={changeHandler} /> 
             <span>+</span>
        </label>
        <div className="output">
            { error && <div className="error">{ error }</div>}
            { file && <div>{ file.name }</div> }
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
        </form>
    )
}

export default UploadImage
