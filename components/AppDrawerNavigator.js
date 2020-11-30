import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSidebarMenu';
import {HomeScreen} from '../screens/homescreen'


export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:HomeScreen
        
    },
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})