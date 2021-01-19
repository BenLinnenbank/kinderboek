import React from 'react';
import styled from 'styled-components';

const StyledButtonText = styled.span`
        font-size: 1.1em;
        margin: 0 auto;
        text-align: center;
        color: ${props => props.theme.colors.text.primary}
    `;

function ButtonText(props) {
    return (
        <StyledButtonText>
            {props.text}
        </StyledButtonText>
    );
}

export default ButtonText;
