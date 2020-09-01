import React from 'react';

function GifDetails(props) {
    const gif = props.location.state;
   console.log(gif)
    return (
        <div className="gif-details">
            {console.log('entered here', gif)}
            <img className="card-image" src={`${gif.images.downsized.url}`} alt=""/>
            <p>Title: {gif.title}</p>
            <p>Rating: {gif.rating}</p>
        </div>
    )
}

export default GifDetails;