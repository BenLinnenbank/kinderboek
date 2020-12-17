import React, { useState } from 'react';
import Menu from './Menu';
import ContentCarousel from './reusable_components/carousel/ContentCarousel';
import book1 from '../assets/bookCovers/Boek1.svg';
import book2 from '../assets/bookCovers/Boek2.svg';
import book3 from '../assets/bookCovers/Boek3.svg';
import book4 from '../assets/bookCovers/Boek4.svg';

function Library() {
    const [books, setBooks] = useState([book1, book2, book3, book4, book1, book3]);

    return (
        <>
            <Menu btn={true} />
            <ContentCarousel title={"Nieuwste boeken"} books={books} />
            <ContentCarousel title={"Laatst bekeken"} books={books} />
        </>
    )
}

export default Library
