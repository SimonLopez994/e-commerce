import styled from "styled-components";

interface SelectProps {
    showCategories: boolean;
}

export const Form = styled.form<SelectProps>`
max-width:15rem;
display:flex;
flex-direction:column;
overflow:hidden;
border-radius:10px;





`
export const LabelContainer = styled.div`
display:flex;
min-width:15rem;
`

export const Label = styled.label`
background:rgba(255, 99, 71, 0.1);
padding:0.5rem 1rem;
color:rgba(0,0,0,0.3);
width:100%;
display:flex;
justify-content: space-between;
align-items:center;
border-radius:20px;
z-index:10;
cursor:pointer;`

export const StyledSvg = styled.svg<SelectProps>`
background-color:white;
border-radius:20px;
padding:0.3rem;
    transition: transform 0.3s ease-in;
    transform: ${({ showCategories }) => (showCategories ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const Select = styled.select<SelectProps>`
width:100%;
height: ${({ showCategories }) => (showCategories ? 'auto' : '0')};
margin:0.5rem 0rem 2rem 0rem;
border:none;
transition: transform 0.3s ease-in;
background:rgba(255, 99, 71, 0.1);
 overflow: hidden;
 z-index:10;
 cursor:pointer;
 &:focus {
        outline: none; 
        border-color: transparent; 
        box-shadow: none;
}


${props => props.showCategories ? `
    transform: translateY(5%)` : `transform: translateY(-160%);`}

`

export const Option = styled.option`
padding:0.8rem 1rem;`