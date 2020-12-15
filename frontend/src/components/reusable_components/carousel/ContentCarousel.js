import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const StyledImg = styled.img`
    width: 240px;
    heigth: 240px;
`;

const StyledContainer = styled.div`
    width: 80%;
    heigth: 240px;
`;

function ContentCarousel(props) {
    return (
        <StyledContainer>
            <Carousel>
                <div>
                    <StyledImg src={props.book1} />
                    <p className="legend">book</p>
                </div>
                <div>
                    <StyledImg src={props.book2} />
                    <p className="legend">book</p>
                </div>
                <div>
                    <StyledImg src={props.book3} />
                    <p className="legend">book</p>
                </div>
                <div>
                    <StyledImg src={props.book4} />
                    <p className="legend">book</p>
                </div>
            </Carousel>
        </StyledContainer>
    )
}

export default ContentCarousel
