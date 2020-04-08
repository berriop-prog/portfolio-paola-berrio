import React from 'react';
import './ImageContainer.css';

const ImageContainer = (props) => {
    return (
        <div className="card-img"
            style={
                {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/portafolio-paolab-react.appspot.com/o/${props.imgName})`}
            }>
        </div>
    )
};

export default ImageContainer;