import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from 'react-native'
// import * as strings from '../utils/colors'
import * as constants from './components/utils/constants'
// import * as colors from '../utils/colors'
// import * as dimens from '../utils/dimens'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { createAppContainer } from "react-navigation";
import { createRootNavigator } from "./router";
import NavigationService from './navigationService.js';
import asyncstorage from "./components/utils/asyncstorage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers"
import { connect } from "react-redux";

const Auth = (props) => {
  const [isSignedIn, setSignInStatus] = useState(false)
  const [isSignInChecked, setSignInCheckedStatus] = useState(false)

  useEffect(() => {
    checkSignIn()
  })
  function checkSignIn() {
    asyncstorage.retrieveItem("user")
      .then((user) => {
        if (user == null) {
          setSignInStatus(false)
        } else {
          props.setUserDetails({
            type: "SET_USER_DETAILS",
            payload: user
          });
          setSignInStatus(true)
        }
        setSignInCheckedStatus(true)
      }).catch(err => {
        setSignInStatus(false)
      });
  }

  if (isSignInChecked) {
    const Layout = createAppContainer(createRootNavigator(isSignedIn));
    return (
      <Layout
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
    );
  } else {
    return null
  }
}

const mapStateToProps = state => ({
  loginData: state.login
});

const mapDispatchToProps = dispatch => ({
  setUserDetails: data =>
    dispatch({
      type: data.type,
      payload: data.payload
    })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

const styles = StyleSheet.create({
})