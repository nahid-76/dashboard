import styled from 'styled-components';
export const WithbackgroundDiv = styled.div`
background:url(${require('./Image/img3.jpg')}) 0 0/cover no-repeat;

`;
export const WithBlurDiv = styled.div`
backdrop-filter: ${props => props.blur ? " blur(5px)" : "none"};
height:100vh;
width:100vw;
display:flex;
justify-content:space-between;
flex-direction:column;
`;


export const ParentDiv = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin-bottom:3rem;

`;

export const Button = styled.button`
width:12rem;
height:2.4rem;
background-color:#3a82e5;
border:none;
border-radius:4px;
color:#fff;
cursor: pointer;
font-size:1.1em;
&:focus {
        outline: none;       
    }
`;

export const Anchore = styled.a`
color:#fff;
width:12rem;
height:2.4rem;
letter-spacing: .03em;
padding-left: .3rem;
cursor: pointer;

`;
export const StyledP = styled.p`
line-height:.2rem;
text-align:start;
margin: 3rem auto;
`;
export const H2 = styled.h2`
color:#fff;
font-weight: 300;
font-size:1.5rem;
`;

export const H1 = styled.h1`
color:#fff;
font-weight: 500;
font-size:2rem;
letter-spacing: .1rem;
word-spacing: .2rem;
`;

export default (
    WithbackgroundDiv,
    StyledP,
    H2, H1,
    Button,
    Anchore,
    ParentDiv,
    WithBlurDiv


)