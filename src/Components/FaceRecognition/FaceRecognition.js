import React from "react";

const FaceRecognition = ({imageUrl}) => {
    return(
        <div className="center">
            <img alt = 'clarifai image' src = {imageUrl}/>
        </div>
    );
}

export default FaceRecognition;