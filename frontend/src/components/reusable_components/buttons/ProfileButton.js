import React from 'react';
import profilePicture from '../../../assets/images/avatarPlaceholder.png';

const ProfileButton = () => {
    return (
        <>
            <img src={profilePicture} alt="User profile" />
        </>
    );
}

export default ProfileButton;
