import React from 'react';
import GifDetails from '../components/gifdetails';

export default function GifResult({ gif }) {
    const [item, setItem] = React.useState(null);
    // const displayDetails = () => {
    //     console.log('got here', gif)

    // }

    if (item) {
        return <GifDetails url={item.images.downsized.url} title={item.title} rating={item.rating}></GifDetails>
    }

    return (
        <button onClick={() => {setItem(null); setItem(gif)}}>
            <div className="card" key={gif.id} >
                <img className="card-image" src={`${gif.images.downsized.url}`} alt="" />
            </div>
        </button>
    )
}