import React from 'react';
import styled from 'styled-components';
import MenuButton from './reusable_components/buttons/MenuButton';
import young from '../assets/images/young.svg';
import middle from '../assets/images/middle.svg';
import old from '../assets/images/old.svg';
import logo from '../assets/images/logo.svg';
import ProfileButton from './reusable_components/buttons/ProfileButton';

const StyledMenu = styled.menu`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    height: 80px;
    padding: 12px;
    margin: 0px;
`;
const StyledContentMenu = styled.menu`
    display: flex;
    align-items: center;
    margin: 0px;
`;
const StyledSettingsMenu = styled.menu`
    margin: 0px;
`;


function Menu(props) {

    return (
        (props.btn)
            ?
            <StyledMenu>
                <StyledContentMenu>
                    <img src={logo} alt="Company logo" />
                    <MenuButton color={"#E9DFD1"} text="2 - 4 jaar" icon={young} />
                    <MenuButton color={"#DFEACF"} text="4 - 6 jaar" icon={middle} />
                    <MenuButton color={"#D7DAEE"} text="6 - 8 jaar" icon={old} />
                </StyledContentMenu>
                <StyledSettingsMenu>
                    <ProfileButton />
                </StyledSettingsMenu>
            </StyledMenu>
            : <StyledContentMenu>
                <img src={logo} alt="Company logo" />
                <h1>menu</h1>
                <StyledSettingsMenu>
                    <ProfileButton />
                </StyledSettingsMenu>
            </StyledContentMenu>
    );
}

export default Menu