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

const StyledH2 = styled.h2`
    margin-botton: 16px;
    color: ${props => props.theme.colors.text.primary};
`;

const StyledH3 = styled.h3`
    margin-top: 5px;
    color: ${props => props.theme.colors.text.primary};
`;

const ContentCarousel = (props) => {
    const flickityOptions = {
        wrapAround: true,
        pageDots: false,
        cellAlign: "left",
        accessibility: true,
        imagesLoaded: true,
    }

    return (
        <StyledContainer>
            <StyledH2>{props.title}</StyledH2>
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
                            <StyledH3 className="legend">{book.title}</StyledH3>
                        </div>
                    );
                })}
            </Flickity>
        </StyledContainer>
    );
}

export default ContentCarousel;
