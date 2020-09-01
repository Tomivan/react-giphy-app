import React, { useState } from 'react';
import GifResult from './gifresult';
import '../index.css';


 export default function SearchGif() {
    const [query, setQuery] = useState('');
    const [gifs, setGifs] = useState([]);

    const searchGif = async (e) => {
        e.preventDefault();

        const url= `https://api.giphy.com/v1/gifs/search?api_key=clgn5TZwjAL5Lj2CNyWFWppxXkzkWTLL&language=en&q=${query}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setGifs(data.data);
            console.log(data.data);
        }
        catch(err) {
            console.log(err);
        }
    }
    return (
        <>
            <h1>React Giphy App</h1>
            <form className="form" onSubmit={searchGif}>
                <input type="text" className="input" placeholder="type your search here"
                    value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit" className="button"> Search</button>
            </form>
            <div className="card-list">
                {gifs.filter(gif => gif.url).map(gif => (
                    <GifResult gif={gif} key={gif.id} />
                ))}
            </div>
        </>
    )
}
