import React from 'react';
import styled from 'styled-components';

const StyledMenuIcon = styled.img`
    margin-right: 8px;
`;

function MenuIcon(props) {
    return (
        <StyledMenuIcon src={props.icon} />
    );
}

export default MenuIcon;
