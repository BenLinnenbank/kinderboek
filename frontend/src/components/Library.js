import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledGrid = styled.div`
    width: 80%;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 24px;
    row-gap: 24px;
`;

const StyledLink = styled(Link)`
    background-color: lightgrey;
`;

function Library() {
    return (
        <>
            <Menu />
            <StyledGrid>
                <StyledLink to="/book1">book1</StyledLink>
                <StyledLink to="/book2">book2</StyledLink>
                <StyledLink to="/book3">book3</StyledLink>
                <StyledLink to="/book4">book4</StyledLink>
            </StyledGrid>
        </>
    )
}

export default Library
