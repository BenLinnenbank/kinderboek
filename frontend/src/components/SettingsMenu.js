import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { toggleTheme } from '../0-actions'


const MenuList = styled.ul`
    position: absolute;
    top: 68px;
    right: 15px;
    background-color: ${props => props.theme.colors.background.secondary};
    padding: 18px;
    list-style: none;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const MenuItem = styled.li`
    line-height: 1.8rem;
`;
    
const MenuLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.text.primary};
`;

const MenuButton = styled.button `
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    font-size: inherit;
    color: ${props => props.theme.colors.text.primary};
`;


const SettingsMenu = ({ isOpen }) => {

    const dispatch = useDispatch()
    
    return (
        isOpen ? (
            <MenuList>
                <MenuItem>
                    <MenuLink>Settings</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink>Profile</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink>Contact</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuButton onClick={() => dispatch(toggleTheme())}>Toggle theme</MenuButton>
                </MenuItem>
            </MenuList>
        ) :
            null
    );
}

export default SettingsMenu;