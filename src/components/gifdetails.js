import React from 'react';

function GifDetails(gif) {
   
    return (
        <div className="gif-details">
            {console.log('entered here', gif)}
            <img className="card-image" src={`${gif.url}`} alt=""/>
            <p>${gif.title}</p>
            <p>${gif.rating}</p>
        </div>
    )
}

export default GifDetails;