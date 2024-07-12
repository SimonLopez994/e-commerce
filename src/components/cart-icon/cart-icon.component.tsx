import React from 'react';
import { CartIconContainer, ShoppingIcon } from './cart-icon.styles';
//import { useSelector } from 'react-redux';
//import { selectIsCartOpen } from '../../store/cart/cart.selector';
//import { useDispatch } from 'react-redux';
//import { setIsCartOpen } from '../../store/cart/cart.action';
//import { selectCartCount } from '../../store/cart/cart.selector';

const CartIcon = () => {
    // const dispatch = useDispatch();
    // const isCartOpen = useSelector(selectIsCartOpen);
    // const cartCount = useSelector(selectCartCount);

    //const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
    return (
        <CartIconContainer>
            <ShoppingIcon fill="black" className='shopping-icon' />
        </CartIconContainer>
    )
}
export default CartIcon