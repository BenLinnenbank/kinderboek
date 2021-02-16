import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const MenuList = styled.ul`

`;

const MenuItem = styled.li`

`;

const SettingsMenu = ({ isOpen }) => {
    
    return (
    isOpen ? (
            <MenuList>
                <MenuItem>
                    <Link>Settings</Link>
                </MenuItem>
                <MenuItem>
                    <Link>Profile</Link>
                </MenuItem>
                <MenuItem>
                    <Link>Contact</Link>
                </MenuItem>
                <MenuItem>
                    <Link>Toggle theme</Link>
                </MenuItem>
            </MenuList>
        ) :
        null
    );
}

export default SettingsMenu;