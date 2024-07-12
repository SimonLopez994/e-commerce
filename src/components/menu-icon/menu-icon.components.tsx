import React from 'react';
import { MenuContainer, MenuIconContainer, MenuIcons } from './menu-icon.styles';
//import { useSelector } from 'react-redux';
//import { selectIsCartOpen } from '../../store/cart/cart.selector';
//import { useDispatch } from 'react-redux';
//import { setIsCartOpen } from '../../store/cart/cart.action';
//import { selectCartCount } from '../../store/cart/cart.selector';

const MenuIcon = () => {
    //const dispatch = useDispatch();
    //const isCartOpen = useSelector(selectIsCartOpen);
    //const cartCount = useSelector(selectCartCount);

    //const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
    return (
        <MenuContainer>
            <MenuIconContainer>
                <MenuIcons />
                <MenuIcons />
                <MenuIcons />
            </MenuIconContainer>
        </MenuContainer>
    )
}
export default MenuIcon