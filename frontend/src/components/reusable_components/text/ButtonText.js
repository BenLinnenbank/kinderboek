import React from 'react';
import styled from 'styled-components';

function ButtonText(props) {
    const StyledButtonText = styled.span`
        font-size: 1.1em;
        padding-bottom: 10px;
        margin: 0 auto;
        text-align: center;
    `;
    return (
        <StyledButtonText>
            {props.text}
        </StyledButtonText>
    );
}

export default ButtonText;
