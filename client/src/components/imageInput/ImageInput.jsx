import React,{useState} from 'react'
import '../imageInput/ImageInput.css'

function ImageInput({type}) {
 
const [fileName,setFileName]=useState(`Select  ${type}`);

const handleFileChange= (event)=>{
    const file= event.target.files[0];
    (file)?setFileName(file.name):setFileName(`Select ${type}`);
};

  return (
    <div>
        <input type="file" id="user-image" className="user-image" onChange={handleFileChange} />
        <label htmlFor="user-image" id="file-placeholder">{fileName}</label>
    </div>
  )
}

export default ImageInput