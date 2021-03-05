import React, { useState } from 'react';
import styled from 'styled-components';
import profilePicture from '../../../assets/images/avatarPlaceholder.png';
import SettingsMenu from '../../SettingsMenu';


const StyledProfileButton = styled.button`
    display: flex;
    align-items: center;
    margin-left: 24px;
    border: 0px;
    height: 40px;
    border-radius: 25px;
    background: none;
`;

const ProfileButton = () => {

    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <StyledProfileButton onClick={() => toggleMenu()}>
            <img src={profilePicture} alt="User profile" />
        </ StyledProfileButton>
        <SettingsMenu isOpen={isOpen} />
        </>
    );
}

export default ProfileButton;
