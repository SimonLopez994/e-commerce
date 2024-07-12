import React from 'react';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationContainer, NavLinks, NavLink } from './navigation.styles';
import MenuIcon from '../../components/menu-icon/menu-icon.components';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import StoreIcon from '../../components/store-icon/store-icon.component';

const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <MenuIcon />
                <StoreIcon/>
                <NavLinks>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/faqs'>FAQs</NavLink>
                    <CartIcon />
                </NavLinks>
                
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;