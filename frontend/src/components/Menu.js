import React from 'react'
import styled from 'styled-components';

const StyledMenu = styled.menu`
    background-color: blue;
    width: 100%;
    heigth: 100px;
    margin-top: 0;
`;

function Menu() {
    return (
        <StyledMenu>
            <h1>menu</h1>
        </StyledMenu>
    )
}

export default Menu
