import React from 'react';
import styled from 'styled-components';
import Flickity from 'react-flickity-component';
import './slider.css';

const StyledImg = styled.img`
    width: 240px;
    heigth: 240px;
`;

const StyledContainer = styled.div`
    width: 85%;
    heigth: 240px;
`;

function ContentCarousel(props) {
    const flickityOptions = {
        "wrapAround": true,
        "pageDots": false,
        "cellAlign": "right",
    }
    return (
        <StyledContainer>
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
            </Flickity>
        </StyledContainer>
    )
}

export default ContentCarousel

// data-flickity='{ 
//     "wrapAround": true, 
//     "pageDots": false, 
//     "cellAlign": "left",
//     "draggable": ">1"
//     }'