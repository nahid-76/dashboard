import React from 'react';
import { StyledInput ,StyledMessageBox} from './styledSignUpForm';
const Input = ({ name,label, error, ...rest }) => {
    return (
        <>
            <StyledInput
                {...rest}
                placeholder={label}
                name={name}
                id={name}
            >
            </StyledInput>
            {error && <StyledMessageBox>{error}</StyledMessageBox>}
        </>
    );
}

export default Input; 