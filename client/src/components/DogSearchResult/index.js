import React from "react";
import { Link } from "react-router-dom";

function DogSearchResult({dog}) {

    return (
      <div className="px-1 py-1">
      <img 
      alt=''
      src={dog?.primary_photo_cropped?.large}/>
      <h1>{dog?.name}</h1>
      <p>Breed: {dog?.breeds?.primary}</p>
      <p>Age: {dog?.age}</p>
      <p>Gender: {dog?.gender}</p>
      <button>Save</button>
      <button>Donate</button>
    </div>
    )
}

export default DogSearchResult;