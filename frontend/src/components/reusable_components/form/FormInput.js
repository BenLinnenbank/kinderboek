import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    width: 200px;
    margin-bottom: 0.5em;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.text.brand};
    padding: 4px;
    &.form-button {
        cursor: pointer;
        height: 24px;
        margin-top: 0.5em;
        background-color: ${props => props.theme.colors.text.brand};
        color: #ffffff;
        border: 0px;
    }
`;

const FormInput = ({...props}) => {
    return (
        <InputField {...props} />
    );
}

export default FormInput;