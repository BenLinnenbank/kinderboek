import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background.primary};
`;

function AppContainer({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default AppContainer
