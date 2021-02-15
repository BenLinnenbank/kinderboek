import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import MenuButton from './reusable_components/buttons/MenuButton';
import young from '../assets/images/young.svg';
import middle from '../assets/images/middle.svg';
import old from '../assets/images/old.svg';
import logo from '../assets/images/logo.svg';
import ProfileButton from './reusable_components/buttons/ProfileButton';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../0-actions/index.js';


const StyledMenu = styled.menu`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    height: 62px;
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
    display: flex;
    align-items: center;
`;


const Menu = (props) => {

    const dispatch = useDispatch()
    const themeContext = useContext(ThemeContext);

    return (
        (props.btn)
            ?
            <StyledMenu>
                <StyledContentMenu>
                    <img src={logo} alt="Company logo" />
                    <MenuButton color={themeContext.colors.age.young} text="2 - 4 jaar" icon={young} />
                    <MenuButton color={themeContext.colors.age.middle} text="4 - 6 jaar" icon={middle} />
                    <MenuButton color={themeContext.colors.age.old} text="6 - 8 jaar" icon={old} />
                </StyledContentMenu>
                <StyledSettingsMenu>
                    <MenuButton 
                        onClick={() => dispatch(toggleTheme())}
                        color="lightblue"
                        text="Toggle Theme"
                        >toggle theme
                    </MenuButton>
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

export default Menu;