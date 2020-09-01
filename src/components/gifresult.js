import React from 'react';
import { navigate } from '@reach/router';
import GifDetails from '../components/gifdetails';

export default function GifResult({ gif }) {
    const [item, setItem] = React.useState(null);
    // const displayDetails = () => {
    //     console.log('got here', gif)

    // }

    if (item) {
        navigate(`/gifdetails/${gif.id}`, {state: gif})
    }

    return (
        <button onClick={() => {setItem(null); setItem(gif)}}>
            <div className="card" key={gif.id} >
                <img className="card-image" src={`${gif.images.downsized.url}`} alt="" />
            </div>
        </button>
    )
}