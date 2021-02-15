import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.background.primary};
`;

const AppContainer = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
}

export default AppContainer;
