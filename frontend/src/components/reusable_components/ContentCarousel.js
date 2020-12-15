import React from 'react'
import styled from 'styled-components';


const StyledContentCarousel = styled.div`
        font-size: 1.1em;
        margin: 0 auto;
        text-align: center;
    `;
const StyledHeader = styled.h1`
    font-size: 1.1em;
    margin: 0 auto;
    text-align: center;
`;

function ContentCarousel(props) {
    return (
        <>
            <StyledHeader>
                {props.header}
            </StyledHeader>
            <StyledContentCarousel>
                {props.children}
            </StyledContentCarousel>
        </>
    )
}

export default ContentCarousel
