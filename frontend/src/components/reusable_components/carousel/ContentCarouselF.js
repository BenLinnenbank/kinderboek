import React from 'react';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import imagesloaded from 'flickity-imagesloaded';
import './slider.css';

const StyledImg = styled.img`
    width: 240px;
    height: 240px;
    margin-right: 16px;
`;

const StyledContainer = styled.div`
    width: 85%;
    /* height: 240px; */
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
            <h2>Laatst gelezen:</h2>
            <Flickity
                className={'carousel'}
                options={flickityOptions}
            >
                <div className="carousel-cell">
                    <StyledImg src={props.book1} />
                    <p className="legend">book</p>
                </div>
                <div className="carousel-cell">
                    <StyledImg src={props.book2} />
                    <p className="legend">book</p>
                </div>
                <div className="carousel-cell">
                    <StyledImg src={props.book3} />
                    <p className="legend">book</p>
                </div>
                <div className="carousel-cell">
                    <StyledImg src={props.book4} />
                    <p className="legend">book</p>
                </div>
                <div className="carousel-cell">
                    <StyledImg src={props.book2} />
                    <p className="legend">book</p>
                </div>
            </Flickity>
        </StyledContainer>
    )
}

export default ContentCarousel