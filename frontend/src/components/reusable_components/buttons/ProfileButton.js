import React from 'react'
import profilePicture from '../../../assets/images/avatarPlaceholder.png'

function ProfileButton(props) {
    return (
        <>
            <img src={profilePicture} alt="User profile" />
        </>
    )
}

export default ProfileButton
