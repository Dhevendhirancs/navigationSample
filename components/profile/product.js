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

const Product = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={require('../../assets/images/box.png')}
                    style={styles.image} />
            </View>
            <View style={styles.titleView}>
                <Text 
                    numberOfLines={1}
                    style={styles.title}>{props.item.title}</Text>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        width: wp('32'),
        height: wp('37%'),
        marginBottom: hp('2%'),
        marginLeft: wp('1%'),
    },
    imageView: {
        width: wp('32%'),
        height: wp('32%'),
        backgroundColor: colors.lightGrey1,
        borderRadius: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '70%',
        height: '70%'
    },
    titleView: {
        width: wp('32%'),
        height: wp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: wp('1%')
    },
    title: {
        fontFamily: constants.themeFont,
        fontSize: wp('4%'),
        color: colors.black
    }
})