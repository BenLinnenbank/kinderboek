import React from 'react';
import Menu from './Menu';
import ContentCarousel from './reusable_components/carousel/ContentCarousel';
import { bookCovers } from '../assets/bookCovers/bookCovers';

function Library() {

    return (
        <>
            <Menu btn={true} />
            <ContentCarousel title={"Nieuwste boeken"} books={bookCovers} />
            <ContentCarousel title={"Laatst bekeken"} books={bookCovers} />
        </>
    )
}

export default Library
