import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from 'react-native'
import * as strings from '../utils/strings'
import * as constants from '../utils/constants'
import * as colors from '../utils/colors'
import * as dimens from '../utils/dimens'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import asyncstorage from "../utils/asyncstorage";
import { connect } from "react-redux";

const customDrawerNavigator = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileView}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImage} />
        <View style={styles.detailsView}>
          <Text style={styles.username}>{props.loginData.userDetails.username}</Text>
          <Text style={styles.country}>{props.loginData.userDetails.country}</Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.setUserDetails({
            type: "SET_SELECTED_TAB",
            payload: constants.productListTab
          });
          props.navigation.navigate('Products')
          props.navigation.closeDrawer()
        }}
        style={styles.box}>
        <Text style={props.drawerData.selectedTab == constants.productListTab
          ? styles.menuItemSelected
          : styles.menuItem}>{strings.productList}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.setUserDetails({
            type: "SET_SELECTED_TAB",
            payload: constants.profileTab
          });
          props.navigation.navigate('Profile')
        }}
        style={styles.box}>
        <Text style={props.drawerData.selectedTab == constants.profileTab
          ? styles.menuItemSelected
          : styles.menuItem}>{strings.profile}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => logoutPressed()}
        style={styles.box}>
        <Text style={styles.menuItem}>{strings.logout}</Text>
      </TouchableOpacity>
    </View>
  )
  function logoutPressed() {
    asyncstorage.saveItem('user', null)
    props.navigation.navigate('Login')
  }
}

const mapStateToProps = state => ({
  loginData: state.login,
  drawerData: state.drawer
});

const mapDispatchToProps = dispatch => ({
  setSelectedTab: data =>
    dispatch({
      type: data.type,
      payload: data.payload
    }),
  setUserDetails: data =>
    dispatch({
      type: data.type,
      payload: data.payload
    })

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(customDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
  },
  profileView: {
    height: hp('15%'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.theme,
    borderBottomColor: 'grey',
    borderBottomWidth: hp('0.1%'),
    paddingHorizontal: wp('4%')
  },
  detailsView: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  username: {
    fontSize: wp('6%'),
    color: colors.white,
    marginLeft: wp('4%'),
    fontWeight: '100',
    fontFamily: constants.themeFont
  },
  country: {
    fontSize: wp('5%'),
    color: colors.white,
    marginLeft: wp('4%'),
    fontFamily: constants.themeFont
  },
  profileImage: {
    width: wp('15%'),
    height: wp('15%'),
  },
  box: {
    width: '100%',
    height: hp('8%'),
    justifyContent: 'center',
    paddingHorizontal: wp('4%'),
    borderBottomWidth: hp('0.1%'),
    borderBottomColor: colors.theme
  },
  menuItem: {
    fontSize: wp('5%'),
    color: colors.black,
    fontFamily: constants.themeFont
  },
  menuItemSelected: {
    fontSize: wp('5%'),
    color: colors.theme,
    fontFamily: constants.themeFont
  }
})