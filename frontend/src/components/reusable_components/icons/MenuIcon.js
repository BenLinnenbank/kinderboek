import React from 'react';
import styled from 'styled-components';

function MenuIcon(props) {
    const StyledMenuIcon = styled.img`
        margin-right: 8px;
    `;
    return (
        <StyledMenuIcon src={props.icon} />
    );
}

export default MenuIcon;
