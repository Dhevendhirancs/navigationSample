import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'
import * as strings from '../utils/colors'
import * as constants from '../utils/constants'
import * as colors from '../utils/colors'
import * as dimens from '../utils/dimens'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const CustomHeader = (props) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={()=> props.menuPressed()}
            style={styles.leftView}>
            <Image 
                source={require('../../assets/images/menu.png')}
                style={styles.menuIcon}/>
        </TouchableOpacity>
        <View style={styles.centerView}>
            <Text style={styles.title}>Profile</Text>
        </View>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: colors.theme,
        flexDirection: 'row'
    },
    leftView: {
        width: wp('15%'),
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuIcon: {
        width: '50%',
        height: '50%'
    },
    centerView: {
        width: wp('70'),
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: wp('5%'),
        color: colors.white,
        fontFamily: constants.themeFont
    },
})