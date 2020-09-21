import styled from 'styled-components';
import { Button } from './startPageStylesComponents'
export const StyledInput = styled.input`
border: none;
border-bottom: 1px solid #fff;
background: transparent;
color:#fff;
/* margin-left:auto;
margin-right:auto; */
margin:1.5rem auto;
font-size:1rem;
width:100%;
::placeholder,
  ::-webkit-input-placeholder {
    color: #fff;
    letter-spacing:.05rem
    
  }
  :-ms-input-placeholder {
     color: #fff;
  }
  &:focus {
        outline: none;
        
    }
   
`;
export const StyledForm = styled.form`
display:flex;
justify-content:space-between;
flex-direction:column;
height:100%;
width:60%;
margin-left:auto;
margin-right:auto;
@media (min-width: 414px) {
  width:30%;
  }
`;
export const StyledMessageBox = styled.div`
background: transparent;
color:red;
/* border-bottom:1px solid red; */
`;
export const FormButton = styled(Button)`
margin-left:auto;
margin-right:auto;
margin-top:2rem;
`;
export const InputGroup=styled.div`
`;


