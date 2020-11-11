import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

const StyledGrid = styled.div`
    background-color: blue;
    width: 100%;
    heigth: 100px;
    margin-top: 0;
`;

function Library() {
    return (
        <>
            <Menu />
            <div>
                <h1>Library</h1>
            </div>
        </>
    )
}

export default Library
