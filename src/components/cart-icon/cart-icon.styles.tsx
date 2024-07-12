import styled from 'styled-components';
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
width: 42px;
height: 42px;
border:1px solid rgba(0,0,0,0.2);
border-radius:30px;

display: flex;

align-items: center;
justify-content: center;
cursor: pointer;
`

export const ShoppingIcon = styled(ShoppingSvg)`
width: 23px;
      height: 15px;
      
`

export const ItemCount = styled.span`
position: absolute;
font-size: 10px;
font-weight: bold;
bottom: 12px;
z-index:-1
`
