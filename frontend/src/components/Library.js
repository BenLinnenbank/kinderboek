import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import boek1 from '../assets/bookCovers/Boek1.svg';
import boek2 from '../assets/bookCovers/Boek2.svg';
import boek3 from '../assets/bookCovers/Boek3.svg';
import boek4 from '../assets/bookCovers/Boek4.svg';

const StyledGrid = styled.div`
    width: 100%;
    margin-top: 80px;
    display: grid;
    grid-template-columns: 240px 240px;
    grid-template-rows: 240px 240px;
    column-gap: 24px;
    row-gap: 24px;
    margin: auto;
    margin-bottom: 20px;
    justify-content: center;
`;

const StyledImg = styled.img`
    width: 240px;
    heigth: 240px;
`;

function Library() {
    return (
        <>
            <Menu btn={true} />
            <StyledGrid>
                <Link to="/book1"><StyledImg src={boek1} /></Link>
                <Link to="/book2"><StyledImg src={boek2} /></Link>
                <Link to="/book3"><StyledImg src={boek3} /></Link>
                <Link to="/book4"><StyledImg src={boek4} /></Link>
            </StyledGrid>
        </>
    )
}

export default Library
