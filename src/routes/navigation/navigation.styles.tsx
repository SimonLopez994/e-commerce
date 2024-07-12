import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 10px 40px;
`;



export const NavLinks = styled.div`
width:33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:end;

`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
    color:black;
    text-decoration:none;

  &:hover {
  background: rgba(0, 0, 0, 0.3)
  }

  @media(max-width: 700px){
  display:none;}
`;