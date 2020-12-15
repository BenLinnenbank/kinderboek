import React from 'react';
import styled from 'styled-components';
import ButtonText from '../text/ButtonText';
import MenuIcon from '../icons/MenuIcon';

function MenuButton(props) {

    const StyledMenuButton = styled.button`
        background-color: ${props.color};
        display: flex;
        align-items: center;
        padding: 8px 20px;
        margin-left: 24px;
        border: 0px;
        width: 130px;
        height: 40px;
        border-radius: 25px;
    `;
    return (
        <StyledMenuButton>
            <MenuIcon icon={props.icon} />
            <ButtonText text={props.text} />
        </ StyledMenuButton>
    );
}

export default MenuButton;
