import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    ProgressBarAndroidComponent
} from 'react-native'
import * as strings from '../utils/colors'
import * as constants from '../utils/constants'
import * as colors from '../utils/colors'
import * as dimens from '../utils/dimens'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const Product = (props) => {
    return (
        <View style={[styles.container, { marginTop: props.index == 0 ? hp('1%') : null }]}>
            <View style={styles.imageView}>
                <View style={styles.imageBox}>
                    <Image
                        source={require('../../assets/images/box.png')}
                        style={styles.image} />
                </View>
            </View>
            <View style={styles.contentView}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.brand}>{props.item.brand}</Text>
                <Text style={styles.brand}>{props.item.size}</Text>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        width: wp('95%'),
        height: hp('15%'),
        marginBottom: hp('1%'),
        alignSelf: 'center',
        borderRadius: wp('2%'),
        flexDirection: 'row',
        backgroundColor: colors.white
    },
    imageView: {
        width: '30%',
        height: '100%',
        borderBottomLeftRadius: wp('2%'),
        borderTopLeftRadius: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBox: {
        width: '85%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGrey1,
        borderRadius: wp('2%')
    },
    image: {
        width: '60%',
        height: '60%'
    },
    contentView: {
        width: '70%',
        height: '100%',
        borderTopRightRadius: wp('2%'),
        borderBottomRightRadius: wp('2%'),
        justifyContent: 'center',
        paddingHorizontal: wp('2%')
    },
    title: {
        fontSize: wp('4.5%'),
        color: colors.black,
        marginBottom: hp('0.5%'),
        fontFamily: constants.themeFont
    },
    brand: {
        fontSize: wp('3.5%'),
        color: colors.black,
        fontFamily: constants.themeFont
    }
})