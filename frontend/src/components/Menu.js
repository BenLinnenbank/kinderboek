import React from 'react'
import styled from 'styled-components';
import MenuButton from './reusable_components/buttons/MenuButton';
import MenuIcon from './reusable_components/icons/MenuIcon';
import young from '../assets/images/young.svg';
import middle from '../assets/images/middle.svg';
import old from '../assets/images/old.svg';

const StyledMenu = styled.menu`
    width: 100%;
    heigth: 80px;
    padding: 20px;
    margin-top: 0;
`;

function Menu() {
    return (
        <StyledMenu>
            <MenuButton
                color={"#E9DFD1"}
                text="2 - 4 jaar"
                icon={young}
            />
            <MenuButton color={"#DFEACF"} text="4 - 6 jaar" icon={middle} />
            <MenuButton color={"#D7DAEE"} text="6 - 8 jaar" icon={old} />
        </StyledMenu>
    )
}

export default Menu
