import React, { Component, PureComponent } from "react";
import { Dimensions } from "react-native";
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    DrawerItems,
    StackActions,
    NavigationActions
} from "react-navigation";
import Products from '../products'
import Profile from '../profile'
import customDrawerNavigator from "./customDrawerNavigator";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const { width, height } = Dimensions.get("screen");

const SignedIn = createStackNavigator({
    Products: {
        screen: Products,
        navigationOptions: {
            header: null
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    },
}, {
    defaultNavigationOptions: {
        gesturesEnabled: true
    }
});

const SignedInDrawer = createDrawerNavigator(
    {
        SignedIn: {
            screen: SignedIn,
            navigationOptions: {
                drawerLabel: <Hidden />
            }
        }
    },
    {
        contentComponent: customDrawerNavigator,
        drawerPosition: "left",
        drawerWidth: wp('70%'),
        drawerLockMode: "locked-closed",
        overlayColor: 'rgba(0, 0, 0, 0.7)'
    }
);

class Hidden extends React.Component {
    render() {
        return null;
    }
}

export default createAppContainer(SignedInDrawer);