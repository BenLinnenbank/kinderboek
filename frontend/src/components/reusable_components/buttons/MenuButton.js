import React from 'react';
import styled from 'styled-components';
import ButtonText from '../text/ButtonText';
import MenuIcon from '../icons/MenuIcon';

const StyledMenuButton = styled.button`
    background: ${props => props.color};
    display: flex;
    align-items: center;
    padding: 8px 20px;
    margin-left: 24px;
    border: 0px;
    width: 130px;
    height: 40px;
    border-radius: 25px;
`;

const MenuButton = (props) => {
    return (
        <StyledMenuButton onClick={props.onClick} color={props.color}>
            <MenuIcon icon={props.icon} />
            <ButtonText text={props.text} />
        </StyledMenuButton>
    );
}

export default MenuButton;
