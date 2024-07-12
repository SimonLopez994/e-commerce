import styled from 'styled-components';

export const MenuContainer = styled.div`
width:33%;
`
export const MenuIconContainer = styled.div`
width:2.6rem;
justify-content:center;
display:flex;
flex-direction:column;
cursor:pointer;

 &:hover div {
    &:nth-child(1) {
      width: 70%;
    }
    &:nth-child(2) {
      width: 100%;
    }
    &:nth-child(3) {
      width: 70%;
    }
`
export const MenuIcons = styled.div`
    width: 100%;
    margin-bottom:2px;
    height: 3px;
    background-color: black;
    transition: transform 0.2s ease-in, width 0.2s ease-in;
   
    &:nth-child(2){
    width:70%;
        
    }

  }
`

