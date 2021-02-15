import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 40px;
    width: 240px;
    background-color: #ffffff;
    border-radius: 12px;
    border: 2px solid rgba(252, 126, 91, 0.25);
    box-shadow: 2px 4px 10px rgba(202, 200, 200, 0.25);
    z-index: 3;
`;

const Form = ({...props}) => {
    return (
        <StyledForm {...props} />
    );
}

export default Form;