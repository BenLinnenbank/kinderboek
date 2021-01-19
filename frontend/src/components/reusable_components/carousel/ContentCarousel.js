import React from 'react';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import imagesloaded from 'flickity-imagesloaded';
import { Link } from 'react-router-dom';
import './slider.css';

const StyledImg = styled.img`
    width: 240px;
    height: 240px;
    margin-right: 16px;
`;

const StyledContainer = styled.div`
    width: 85%;
    padding: 40px;
`;

function ContentCarousel(props) {
    const flickityOptions = {
        wrapAround: true,
        pageDots: false,
        cellAlign: "left",
        accessibility: true,
        imagesLoaded: true,
    }

    return (
        <StyledContainer>
            <h2>{props.title}</h2>
            <Flickity
                className={'carousel'}
                options={flickityOptions}
            >
                {props.books.map((book, index) => {
                    return (
                        <div key={index} className="carousel-cell">
                            <Link to={`/${book.route}`}>
                                <StyledImg src={book.svg} />
                            </Link>
                            <p className="legend">book</p>
                        </div>
                    );
                })}
            </Flickity>
        </StyledContainer>
    )
}

export default ContentCarousel
