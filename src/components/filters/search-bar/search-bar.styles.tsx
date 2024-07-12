import styled from "styled-components";


export const LabelContainer = styled.div`
display:flex;
min-width:15rem;
position:relative;
`

export const Input = styled.input`
background:rgba(255, 99, 71, 0.1);
max-height:1rem;
padding:0.7rem 10rem 0.7rem 1rem;
border:none;
color:rgba(0,0,0,0.5);
margin:0 auto;
display:flex;
justify-content: space-between;
align-items:center;
border-radius:20px;
z-index:10;

@media(max-width: 740px) {
padding:0.7rem 15rem 0.7rem 1rem;

}


&:focus {
outline: none; 
        border-color: transparent; 
        box-shadow: none;}`

export const StyledSvg = styled.svg`
position:absolute;
top:4px;
right:5%;
background-color:white;
z-index:10;
padding:0.5rem;
border-radius:20px;
   
`


