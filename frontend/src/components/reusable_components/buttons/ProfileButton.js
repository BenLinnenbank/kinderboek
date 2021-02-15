import React from 'react';
import styled from 'styled-components';
import profilePicture from '../../../assets/images/avatarPlaceholder.png';


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
    return (
        <StyledProfileButton>
            <img src={profilePicture} alt="User profile" />
        </ StyledProfileButton>
    );
}

export default ProfileButton;
