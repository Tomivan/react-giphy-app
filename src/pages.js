import React from 'react';
import { Router } from '@reach/router';
import SearchGif from './components/searchgif';
import GifDetails from './components/gifdetails';

const Pages = () => {
    return (
        <Router>
            <SearchGif path='/' />
            <GifDetails path='/gifdetails/:id' />
        </Router>
    )
}

export default Pages;