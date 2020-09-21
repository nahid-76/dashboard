import React, { useState } from 'react';
import SignUpForm from './signUpForm';
import LoginForm from './loginForm';
import { WithbackgroundDiv, StyledP, H2, H1, Button, ParentDiv, Anchore, WithBlurDiv } from './startPageStylesComponents'
const StartPage = () => {
    const [signUpButtonClicked, setSignUpButtonClicked] = useState(false);
    const [loginButtonClicked, setLoginButtonClicked] = useState(false);
    const onSignUpButtonClick = () => {
        setSignUpButtonClicked(!loginButtonClicked);
    }
    const onLoginButtonClick = () => {
        setLoginButtonClicked(!signUpButtonClicked);
    }
    return (
        <>
            <WithbackgroundDiv>
                <WithBlurDiv blur={signUpButtonClicked || loginButtonClicked}>
                    <StyledP>
                        <H2>
                            {signUpButtonClicked || loginButtonClicked ? "Back" : "Explore"}
                        </H2>
                        <H1>
                            {signUpButtonClicked && "Sign Up"}
                            {loginButtonClicked && "Login"}
                            {!signUpButtonClicked && !loginButtonClicked && "Persian Gulf"}
                        </H1>
                    </StyledP>
                    {signUpButtonClicked ? <SignUpForm /> : null}
                    {loginButtonClicked ? <LoginForm /> : null}
                    <ParentDiv>
                        {signUpButtonClicked || loginButtonClicked ?
                            null :
                            <Button onClick={onSignUpButtonClick}>
                                Sign Up
                            </Button>}

                        <Anchore onClick={onLoginButtonClick}>already a member?<b>login</b></Anchore>
                    </ParentDiv>
                </WithBlurDiv>
            </WithbackgroundDiv>
        </>
    );
}

export default StartPage; 